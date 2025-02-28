import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-academic-calendar',
  templateUrl: './academic-calendar.component.html',
  styleUrls: ['./academic-calendar.component.css']
})
export class AcademicCalendarComponent implements OnInit {
  moreData: any = [];
  calendar: any = [];
  pa: number = 1;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getScholarshipData();
  }
  getScholarshipData() {
    this.homeService.getScholarshipData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.moreData = res;
      
      this.calendar = [];
      this.moreData.forEach((element: any) => {
        if (element.purpose == 'calendar') {
          this.calendar.push(element);
        }
      });
    })
  }

}
