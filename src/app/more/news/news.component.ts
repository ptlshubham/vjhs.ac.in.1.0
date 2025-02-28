import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public newsData: any = [];
  public start: number = 0;
  
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getNewsDetails();
  }
  getNewsDetails() {
    this.homeService.getAllNewsDataForInstitute(localStorage.getItem('InstituteId')).subscribe((res: any=[]) => {
      this.newsData = res.slice(0);

    })
  }

}
