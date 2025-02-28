import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-campus-life',
  templateUrl: './campus-life.component.html',
  styleUrls: ['./campus-life.component.css']
})
export class CampusLifeComponent implements OnInit {
  campusData: any = [];
  multiImage: any = [];
  mainData: any = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCampusLifeDataById();

  }
  getCampusLifeDataById() {
    this.homeService.getCampusDetails(localStorage.getItem('InstituteId')).subscribe(async (res: any) => {
      this.campusData = res;
      
      for(let i=0;i<this.campusData.length;i++){
        if (this.campusData[i].id) {
          await this.homeService.getCampusMultiImageById(this.campusData[i].id).toPromise().then((res: any) => {
              this.multiImage = res;
              this.mainData.push(
                {
                  id: this.campusData[i].id,
                  institute_id: this.campusData[i].institute_id,
                  campusTitle: this.campusData[i].campusTitle,
                  campusDetails: this.campusData[i].campusDetails,
                  campusImage: this.campusData[i].campusImage,
                  createddate: this.campusData[i].createddate,
                  updateddate: this.campusData[i].updateddate,
                  multiImage: this.multiImage,
                  cols:false,
                  index:i+1
                });
                if(this.campusData.length == this.mainData.length){
                  this.open(0);   
                }
              this.multiImage.push(
                {
                  image: this.campusData[i].campusImage
                }
              )
          });
        }
      }
    })
  }
  open(i: any) {
    this.mainData[i].cols = true;
    
    this.mainData.forEach((element: any, index: any) => {
      if (index == i) {
        element.cols = true;
      } else {
        element.cols = false;
      }
    });
  }
}
