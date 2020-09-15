import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  yearList = [];
  launchList = [];
  landingList = [];
  selectedYear = '';
  selectedLaunch = '';
  selectedLanding = '';

  @Input() filterParams: any;
  @Output() selectedFilters = new EventEmitter<any>();

  constructor() {
    this.yearList = [
      { value: '2006', active: false },
      { value: '2007', active: false },
      { value: '2008', active: false },
      { value: '2009', active: false },
      { value: '2010', active: false },
      { value: '2011', active: false },
      { value: '2012', active: false },
      { value: '2013', active: false },
      { value: '2014', active: false },
      { value: '2015', active: false },
      { value: '2016', active: false },
      { value: '2017', active: false },
      { value: '2018', active: false },
      { value: '2019', active: false },
      { value: '2020', active: false }
    ];
    this.launchList = [
      { value: 'true', active: false },
      { value: 'false', active: false }
    ];
    this.landingList = [
      { value: 'true', active: false },
      { value: 'false', active: false }
    ];
  }

  ngOnInit(): void {
    console.log('Filter Params =>', this.filterParams);
    this.setDefaultFilter();
  }

  setDefaultFilter(): void {
    this.setActiveClass('year', this.filterParams.year, true);
    this.setActiveClass('launch', this.filterParams.launch, true);
    this.setActiveClass('landing', this.filterParams.land, true);
  }

  onFilterChange(type, option, event): void {
    if (event.target.checked) {
      this.setActiveClass(type, option.value, true);
    } else {
      this.setActiveClass(type, option.value, false);
    }
    this.selectedFilters.emit({
      launch: this.selectedLaunch,
      land: this.selectedLanding,
      year: this.selectedYear
    });
  }

  setActiveClass(type, val, checked): void {
    switch (type) {
      case 'year':
        const yearIndex = this.yearList.findIndex(x => x.value === val);
        if (yearIndex > -1) {
          this.selectedYear = this.yearList[yearIndex].value;
          for (let i = 0; i < this.yearList.length; i++) {
            this.yearList[i].active = false;
          }
          this.yearList[yearIndex].active = checked;
        }
        break;
      case 'launch':
        const launchIndex = this.launchList.findIndex(x => x.value === val);
        if (launchIndex > -1) {
          this.selectedLaunch = this.launchList[launchIndex].value;
          for (let i = 0; i < this.launchList.length; i++) {
            this.launchList[i].active = false;
          }
          this.launchList[launchIndex].active = checked;
        }
        break;
        case 'landing':
          const landingIndex = this.landingList.findIndex(x => x.value === val);
          if (landingIndex > -1) {
            this.selectedLanding = this.landingList[landingIndex].value;
            for (let i = 0; i < this.landingList.length; i++) {
              this.landingList[i].active = false;
            }
            this.landingList[landingIndex].active = checked;
          }
          break;
      default:
        break;
    }
  }
}
