import {AfterContentInit, AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {Chord, ChordData} from '../app.service';
import {BehaviorSubject, interval, Observable, timer} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-chord-chart',
  template: '<div #chordChart id="chord_chart"></div>'
})
export class ChordChartComponent implements OnInit, AfterViewInit {
  @Input() chords: Chord[];
  @Input() public preSelect: string[];
  private chordData: ChordData;
  private svg;
  private arcs;
  private height = window.innerHeight;
  private width = window.innerWidth;
  private innerRadius = Math.min(this.width, this.height) * 0.5 - 100;
  private outerRadius = this.innerRadius + 6;
  private chord = d3.chordDirected()
    .padAngle(12 / this.innerRadius)
    .sortSubgroups(d3.descending)
    .sortChords(d3.descending);
  private arc = d3.arc()
    .innerRadius(this.innerRadius)
    .outerRadius(this.outerRadius);
  // @ts-ignore
  private ribbon = d3.ribbonArrow()
    .radius(this.innerRadius - 0.5)
    .padAngle(1 / this.innerRadius);
  private s$: BehaviorSubject<Chord[]>;
  private so$: Observable<Chord[]>;
  private ribbons: any;
  private color: d3.ScaleOrdinal<string, string, never>;

  constructor() {
    this.s$ = new BehaviorSubject<Chord[]>(this.chords);
    this.so$ = this.s$.asObservable();
    this.so$.pipe(filter(d => !!d)).subscribe(d => {
      this.onDataChange(d);
      this.ticOnData(this.chordData);
    });
  }

  private onRibbonOuted(e, d): void {
    const els = this.getLinkedRibbonsIds(d.source.index, this.chordData);
    d3.selectAll(els.join(','))
      .attr('fill', (dd: any) => this.color(this.chordData.names[dd.target.index]));
  }

  private onRibbonOvered(e, d): void {
    const els = this.getLinkedRibbonsIds(d.source.index, this.chordData);
    d3.selectAll(els.join(',')).attr('fill', 'black');
  }

  public ticOnData(chordData: ChordData): void {
    d3.select('#chord_chart').select('svg').remove();
    this.color = d3.scaleOrdinal(chordData.names, d3.schemeCategory10);
    const chords = this.chord(chordData.matrix);

    this.svg = d3.select('#chord_chart').append('svg')
      .attr('viewBox', `${-this.width / 2} ${-this.height / 2} ${this.width} ${this.height}`);

    this.arcs = this.svg.append('path')
      .attr('id', (d) => `arc_${d}`)
      .attr('fill', 'none')
      .attr('d', d3.arc()({
        outerRadius: this.outerRadius,
        innerRadius: this.innerRadius,
        startAngle: 0,
        endAngle: 2 * Math.PI
      }));
    const group = this.svg.append('g')
      .attr('font-size', 10)
      .attr('font-family', 'sans-serif')
      .selectAll('g')
      .data(chords.groups)
      .join('g');

    group.append('path')
      .attr('fill', d => this.color(chordData.names[d.index]))
      .attr('d', this.arc);

    group.append('text')
      .each(d => (d.angle = (d.startAngle + d.endAngle) / 2))
      .attr('dy', '0.35em')
      .attr('transform', d => `
        rotate(${(d.angle * 180 / Math.PI - 90)})
        translate(${this.outerRadius + 5})
        ${d.angle > Math.PI ? 'rotate(180)' : ''}
      `)
      .attr('text-anchor', d => d.angle > Math.PI ? 'end' : null)
      .text(d => chordData.names[d.index]);

    this.ribbons = this.svg.append('g')
      .attr('fill-opacity', 0.75);
    this.ribbons
      .selectAll('path')
      .data(chords)
      .join('path')
      .attr('id', d => `ribbon_${d.source.index}_${d.target.index}`)
      .on('mouseover', (e, d) => this.onRibbonOvered(e, d))
      .on('mouseout', (e, d) => this.onRibbonOuted(e, d))
      .style('mix-blend-mode', 'multiply')
      .attr('fill', d => this.color(chordData.names[d.target.index]))
      .attr('d', this.ribbon)
      .append('title')
      .text(d => `${d.source.index} → ${d.target.index} ${d.source.value}`);

    this.svg.node();
  }

  private onDataChange(d: Chord[]): void {
    const names = this.getNames(d);
    const index = this.getIndex(names);
    const matrix = this.generateMatrix(d, index, names);
    this.chordData = {
      chords: d,
      names, matrix, index
    };
  }

  ngOnInit(): void {
    this.onDataChange(this.chords);
  }

  ngAfterViewInit(): void {
    this.filterByAction(this.preSelect);
  }

  filterByAction(actions: string[]): void {
    const chords = actions
      .reduce((p, c) => p.concat(this.filterConnectionsByAction(c, this.chords, 4)), new Array<Chord>());
    this.s$.next(chords);
  }

  private generateMatrix(chordD: Chord[], index: Map<string, number>, names: string[]): number[][] {
    const matrix = Array.from(index, () => new Array(names.length).fill(0));
    for (const {source, target, value} of chordD) {
      matrix[index.get(source)][index.get(target)] += value;
    }
    return matrix;
  }

  private filterConnectionsByAction(action: string, chords: Chord[], depth: number): Chord[] {
    const _found: Set<Chord> = new Set<Chord>();
    const _filterConnectionsByAction = (_action: string, _chords: Chord[], _depth: number) => {
      if (_depth > 0) {
        const source = _chords.filter(c => _action === c.source);
        const target = _chords.filter(c => _action === c.target);
        source.forEach(c => {
          if (!_found.has(c)) {
            _found.add(c);
            _filterConnectionsByAction(c.source, _chords.filter(cc => !source.includes(c)), --_depth);
          }
        });
        target.forEach(c => {
          if (!_found.has(c)) {
            _found.add(c);
            _filterConnectionsByAction(c.source, _chords.filter(cc => !target.includes(c)), --_depth);
          }
        });
      }
    };
    _filterConnectionsByAction(action, chords, depth);
    return Array.from(_found.values());
  }

  private getLinkedRibbonsIds(idx: number, chordData: ChordData): string[] {
    let els: string[] = [];
    const visited = [];
    const sourceIdx = idx;
    const sourceName = chordData.names[sourceIdx];
    const targetsIdxs = chordData.chords.filter(c => c.source === sourceName).map(c => chordData.index.get(c.target));
    const filterArByConnection = (ar) => ar.map((e, i) => e === 0 ? -1 : i).filter(e => e > -1);
    const findConnectedEls = (i) => {
      if (!visited.includes(i)) {
        visited.push(i);
        const found = filterArByConnection(chordData.matrix[i]);
        const ids = found.map(e => `#ribbon_${i}_${e}`);
        els = els.concat(ids);
        found.forEach(findConnectedEls);
      }
    };
    [sourceIdx, ...targetsIdxs].forEach(findConnectedEls);
    return els;
  }

  getNames(chords: Chord[]): string[] {
    return Array.from(new Set(chords.map(dd => [dd.source, dd.target]).reduce((p, c) => p.concat(c), [])).values());
  }

  getIndex(names): Map<string, number> {
    return new Map(names.map((name, i) => [name, i]));
  }

}
