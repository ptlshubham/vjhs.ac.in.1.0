import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.css'],
  standalone: false
})
export class ScholarshipComponent implements OnInit {
  moreData: any = [];
  scholarship: any = [];
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
      
      this.scholarship = [];
      this.moreData.forEach((element: any) => {
        if (element.purpose == 'scholarship') {
          this.scholarship.push(element);
        }
      });
    })
  }

}
