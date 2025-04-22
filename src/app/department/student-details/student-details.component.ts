import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  standalone: false
})
export class StudentDetailsComponent implements OnInit {
  studentList: any = [];

  pa: number = 1;
  constructor(
    private homeService: HomeService,
    private _lightbox: Lightbox
  ) { }

  ngOnInit(): void {
    this.getStaffDetails();
  }
  getStaffDetails() {
    this.homeService.getStudentList(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      res.forEach((element: any) => {
        this.studentList.push({
          src: 'https://api.cesociety.in' + element.image,
          thumb: 'https://api.cesociety.in' + element.image,
          caption: element.title,
          title: element.title,
          details: element.details,
        });
      });
      
    })
  }
  openZoomGallery(index: number): void {
    // open lightbox
    this._lightbox.open(this.studentList, index, {
      wrapAround: true, showImageNumberLabel: true, showZoom: true, centerVertically: true, showDownloadButton: true
    });
  }
}
