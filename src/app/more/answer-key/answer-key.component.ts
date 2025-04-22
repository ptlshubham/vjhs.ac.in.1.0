import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-answer-key',
  standalone: false,
  templateUrl: './answer-key.component.html',
  styleUrl: './answer-key.component.css'
})
export class AnswerKeyComponent implements OnInit {

  public answerkeyData: any = [];
  public answerkeyData1: any = [];
  public answerkeyData2: any = [];

  public start: number = 0;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getAnswerkeyDetails();
  }
  getAnswerkeyDetails() {
    this.homeService.getAnswerkeyOnlyForCESURL(localStorage.getItem('InstituteId')).subscribe((res: any=[]) => {
      this.answerkeyData = res.slice(0);

    })
  }

}
