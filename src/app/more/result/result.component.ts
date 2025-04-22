import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  standalone: false
})
export class ResultComponent implements OnInit {
  resultData: any = [];
  pa: number = 1;
  years: { value: string }[] = [];
  selectedYear: any;
  filterData: any = [];
  currentYears: any;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getResultDataById();
    const currentYear = new Date().getFullYear();
    this.currentYears = currentYear;
    this.selectedYear = this.currentYears;

    for (let i = 2010; i <= currentYear; i++) {
      this.years.push({ value: i.toString() });
    }
  }
  selectYear(val: any) {
    this.resultData = [];
    this.selectedYear = val;
    this.filterData.forEach((element: any) => {
      
      if (element.year == val) {
        
        this.resultData.push(element);
      }
    });
  }
  getResultDataById() {
    this.homeService.getResultDetailsById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.filterData = res;
      this.filterData.forEach((element: any) => {
        if (element.year == this.currentYears) {
          this.resultData.push(element);
        }
      });
      this.resultData.forEach((element: any, index: any) => {
        element.cols = false;
      });
    })
  }
  open(i: any) {
    this.resultData[i].cols = true;
    this.resultData.forEach((element: any, index: any) => {
      if (index == i) {
        element.cols = true;
      } else {
        element.cols = false;
      }
    });
  }
  close(i: any) {
    this.resultData[i].cols = true;
    this.resultData.forEach((element: any, index: any) => {
      element.cols = false;
    });
  }
}
