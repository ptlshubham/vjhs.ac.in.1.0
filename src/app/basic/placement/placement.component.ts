import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {
  placementData: any = [];
  multiImage: any = [];
  mainData: any = [];
  @ViewChild('descriptionRef') descriptionRef!: ElementRef;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCommeteeDataById();

  }
  getCommeteeDataById() {
    this.homeService.getPlacementDetails(localStorage.getItem('InstituteId')).subscribe(async (res: any) => {
      this.placementData = res;
      for (let i = 0; i < this.placementData.length; i++) {
        if (this.placementData[i].id) {
          await this.homeService.getPlacementMultiImageById(this.placementData[i].id).toPromise().then((res: any) => {
            this.multiImage = res;
            this.mainData.push(
              {
                id: this.placementData[i].id,
                institute_id: this.placementData[i].institute_id,
                placeTitle: this.placementData[i].placeTitle,
                placeDetails: this.placementData[i].placeDetails,
                placeImage: this.placementData[i].placeImage,
                createddate: this.placementData[i].createddate,
                updateddate: this.placementData[i].updateddate,
                multiImage: this.multiImage,
                cols: false,
                index: i + 1
              });
            if (this.placementData.length == this.mainData.length) {
              this.open(0);
            }
            this.multiImage.push(
              {
                image: this.placementData[i].placeImage
              }
            )
          });
        }
      }
      // this.placementData.forEach(async (element: any) => {
      //   if (element.id) {
      //     await this.homeService.getCommiteeMultiImageById(element.id).toPromise().then((res: any) => {
      //         this.multiImage = res;
      //         this.mainData.push(
      //           {
      //             id: element.id,
      //             institute_id: element.institute_id,
      //             commTitle: element.commTitle,
      //             commDetails: element.commDetails,
      //             placeImage: element.placeImage,
      //             createddate: element.createddate,
      //             updateddate: element.updateddate,
      //             multiImage: this.multiImage,
      //             cols:false,

      //           });
      //           if(this.placementData.length == this.mainData.length){
      //             this.open(0);   
      //           }
      //         this.multiImage.push(
      //           {
      //             image: element.placeImage
      //           }
      //         )
      //     });
      //   }
      // });
      // for (let i = 0; i < this.mainData.length; i++) {
      //   this.mainData[i].index = i + 1;
      // }

    })
  }
  open(i: any) {
    this.mainData[i].cols = true;
    if (this.descriptionRef && this.descriptionRef.nativeElement) {
      this.descriptionRef.nativeElement.focus();

      // Scroll to the description element
      this.descriptionRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.mainData.forEach((element: any, index: any) => {
      if (index == i) {
        element.cols = true;
      } else {
        element.cols = false;
      }
    });
  }
}
