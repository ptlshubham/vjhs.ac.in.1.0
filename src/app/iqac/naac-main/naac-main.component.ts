import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-naac-main',
  templateUrl: './naac-main.component.html',
  styleUrls: ['./naac-main.component.css']
})
export class NaacMainComponent implements OnInit {
  NaacData: any = [];
  crieteria: any = '';
  criteria: any = []
  isOpen: boolean = false;
  allData: any = [];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getAllNAACDetails();
  }
  getAllNAACDetails() {
    this.homeService.getNewNaacDetails(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.NaacData = res;
      
    })
  }
  openCriteria(data: any) {
    this.allData = [];
    this.crieteria = data;
    this.isOpen = true;
    this.NaacData.forEach((element: any) => {
      if (element.criteria == this.crieteria) {
        
        this.allData.push(element);
      }
    });
  }
}
