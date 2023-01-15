import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {map, startWith, tap} from 'rxjs/operators';
import {BehaviorSubject, interval, Observable} from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  myCtrl = new FormControl();
  filteredOptions: Observable<string[]>;
  @Input() preSelectOptions: string[];
  @Input() options: string[];
  @Output() selectedOptions: EventEmitter<string[]>;

  @ViewChild('optionInput') optionInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  private s$: BehaviorSubject<string[]>;
  so$: Observable<string[]>;

  constructor() {
    this.selectedOptions = new EventEmitter<string[]>();
    this.s$ = new BehaviorSubject<string[]>(this.preSelectOptions);
    this.so$ = this.s$.asObservable();
    this.so$.subscribe(
      (opts) => this.selectedOptions.emit(opts)
    );

    this.filteredOptions = this.myCtrl.valueChanges.pipe(
      startWith(null),
      map((opt: string | null) => opt ? this._filter(opt) : this.options.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    console.log("add", input, value)

    if ((value || '').trim()) {
      this.preSelectOptions.push(value.trim());
      this.s$.next(this.preSelectOptions);
    }

    if (input) {
      input.value = '';
    }

    this.myCtrl.setValue(null);
  }

  remove(option: string): void {
    const index = this.preSelectOptions.indexOf(option);

    if (index >= 0) {
      this.preSelectOptions.splice(index, 1);
      this.s$.next(this.preSelectOptions);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.preSelectOptions.push(event.option.viewValue);
    this.s$.next(this.preSelectOptions);
    this.optionInput.nativeElement.value = '';
    this.myCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(opt => opt.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit(): void {
    // interval(3000).pipe(tap(i => {
    //   this.preSelectOptions.push(`${i}`);
    //   this.s$.next(Array.from(new Set<string>(this.preSelectOptions).values()));
    // })).subscribe();
  }
}
