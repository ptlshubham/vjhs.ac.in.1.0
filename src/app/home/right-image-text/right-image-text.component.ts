import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-right-image-text',
  templateUrl: './right-image-text.component.html',
  styleUrls: ['./right-image-text.component.css']
})
export class RightImageTextComponent implements OnInit {
  public newsData: any = [];

  public start: number = 0;
  public end: number = 3;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getNewsDetails();
  }
  getNewsDetails() {
    this.homeService.getAllNewsDataForInstitute(localStorage.getItem('InstituteId')).subscribe((res: any=[]) => {
      this.newsData = res.slice(0,3);
    })
  }
}