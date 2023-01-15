import {Component, ViewChild} from '@angular/core';
import {AppService, Chord} from './app.service';
import {Observable} from 'rxjs';
import {ChordChartComponent} from './chord-chart/chord-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public preselectedOptions = ['edge-01', 'edge-121'];
  public searchOptions$: Observable<string[]>;
  chords$: Observable<Chord[]>;

  @ViewChild('chordChartComponent') chordChartComponent: ChordChartComponent;

  constructor(private appService: AppService) {
    this.chords$ = this.appService.getChords();
    this.searchOptions$ = this.appService.getSearchOptions();
  }

  onSelectedOptions(selectedActions: string[]): void {
    this.chordChartComponent.filterByAction(selectedActions);
  }
}
