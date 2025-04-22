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
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getResultDataById();
  }
  getResultDataById() {
    this.homeService.getResultDetailsById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.resultData = res;
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
