import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone:false
})
export class AboutComponent implements OnInit {
  src = '/assets/pdf/Best practices of institute.pdf';
  src1 = '/assets/pdf/Performance of institute.pdf';
  idp = 'https://api.cesociety.in/pdf/1715162979376.pdf';
  aff = 'https://api.cesociety.in/pdf/1739259268583.pdf';
  naac = 'https://api.cesociety.in/pdf/1739259361770.pdf';

  reportData: any = [];
  pa: number = 1;
  constructor(
    private homeService: HomeService,
  ) {
    this.getAnnualReportDetails();
  }

  ngOnInit(): void {
  }
  getAnnualReportDetails() {
    this.homeService.getothersDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      res.forEach((element: any) => {
        if (element.purpose == 'report') {
          this.reportData.push(element);
        }
      });
    });
  }
}
