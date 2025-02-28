import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-nacc',
  templateUrl: './nacc.component.html',
  styleUrls: ['./nacc.component.css']
})
export class NaccComponent implements OnInit {
  keyIndicator: any = [];
  NaacData: any = [];
  criteria: any = []
  parameter: any = [];
  crieteria: any = '';
  allData: any = [];
  isOpen: boolean = false;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getAllNAACDetails();
  }
  open(i: any, id: any) {
    this.parameter = [];
    this.keyIndicator[i].cols = true;
    this.keyIndicator.forEach((element: any, index: any) => {
      if (index == i) {
        element.cols = true;
        this.NaacData.forEach((element: any) => {
          if (element.keyno == id) {
            this.parameter.push(element);
          }
        });
      } else {
        element.cols = false;
      }
    });
  }
  close(i: any) {
    this.keyIndicator[i].cols = true;
    this.keyIndicator.forEach((element: any, index: any) => {
      element.cols = false;
    });
  }
  getAllNAACDetails() {
    this.homeService.getNAACData().subscribe((res: any) => {
      this.allData = res;
    })
  }
  getGroupKeyNoDetails(data: any) {
    this.homeService.getKeyNoGroup(data).subscribe((res: any) => {
      this.keyIndicator = res;
    })
  }
  openCriteria(data: any) {
    this.NaacData = [];
    this.crieteria = data;
    this.isOpen = true;
    this.allData.forEach((element: any) => {
      if (element.criteria == data) {
        this.NaacData.push(element);
      }
    });
    this.getGroupKeyNoDetails(data);

  }
}
