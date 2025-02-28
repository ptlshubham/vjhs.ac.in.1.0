import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-new-syllabus',
  templateUrl: './new-syllabus.component.html',
  styleUrls: ['./new-syllabus.component.css']
})
export class NewSyllabusComponent implements OnInit {
  syllabusData: any = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCommeteeDataById();

  }
  getCommeteeDataById() {
    this.homeService.getSyllabusDetails(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.syllabusData = res;
      this.syllabusData[0].cols = true;
    })
  }
  open(i: any) {
    this.syllabusData[i].cols = true;
    this.syllabusData.forEach((element: any, index: any) => {
      if (index == i) {
        element.cols = true;
      } else {
        element.cols = false;
      }
    });
  }
}
