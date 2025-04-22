import { Component, OnInit } from '@angular/core';
import { HomeService } from '../core/services/home.services';

@Component({
  selector: 'app-ipcell',
  standalone: false,
  templateUrl: './ipcell.component.html',
  styleUrl: './ipcell.component.css'
})
export class IpcellComponent implements OnInit {
  policy = 'https://api.cesociety.in/pdf/1739950026896.pdf';
  utlityPatentData: any = [];
  designPatentData: any = [];
  copyrightsData: any = [];
  trademarksData: any = [];

  p: number = 0;
  d: number = 0;
  c: number = 0;
  t: number = 0;

  constructor(
    private ipcellService: HomeService,
  ) { }

  ngOnInit(): void {
    this.getCoprightData();
    this.getPatentData();
    this.getTrademarkData();
  }

  getCoprightData() {
    this.ipcellService.getCopyrightDataById(localStorage.getItem('InstituteId')).subscribe((data) => {
      this.copyrightsData = data;
      for (let i = 0; i < this.copyrightsData.length; i++) {
        this.copyrightsData[i].index = i + 1;
      }
    });
  }

  getPatentData() {
    this.ipcellService.getPatentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.utlityPatentData = res.filter((patent: any) => patent.purpose == 'Utility Patent');
      this.designPatentData = res.filter((patent: any) => patent.purpose == 'Design Patent');
      
      for (let i = 0; i < this.utlityPatentData.length; i++) {
        this.utlityPatentData[i].index = i + 1;
      }
      for (let i = 0; i < this.designPatentData.length; i++) {
        this.designPatentData[i].index = i + 1;
      }
    });
  }

  getTrademarkData() {
    this.ipcellService.getTrademarkDataById(localStorage.getItem('InstituteId')).subscribe((data) => {
      this.trademarksData = data;
      debugger
      for (let i = 0; i < this.trademarksData.length; i++) {
        this.trademarksData[i].index = i + 1;
      }
    });
  }

}
