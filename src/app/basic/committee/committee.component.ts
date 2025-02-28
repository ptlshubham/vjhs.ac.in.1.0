import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent implements OnInit {
  commiData: any = [];
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
    this.homeService.getCommeteeDetails(localStorage.getItem('InstituteId')).subscribe(async (res: any) => {
      this.commiData = res;
      
      for (let i = 0; i < this.commiData.length; i++) {
        if (this.commiData[i].id) {
          await this.homeService.getCommiteeMultiImageById(this.commiData[i].id).toPromise().then((res: any) => {
            this.multiImage = res;
            this.mainData.push(
              {
                id: this.commiData[i].id,
                institute_id: this.commiData[i].institute_id,
                commTitle: this.commiData[i].commTitle,
                commDetails: this.commiData[i].commDetails,
                commImage: this.commiData[i].commImage,
                createddate: this.commiData[i].createddate,
                updateddate: this.commiData[i].updateddate,
                multiImage: this.multiImage,
                cols: false,
                index: i + 1
              });
            if (this.commiData.length == this.mainData.length) {
              this.open(0);
            }
            this.multiImage.push(
              {
                image: this.commiData[i].commImage
              }
            )
          });
        }
      }
      // this.commiData.forEach(async (element: any) => {
      //   if (element.id) {
      //     await this.homeService.getCommiteeMultiImageById(element.id).toPromise().then((res: any) => {
      //         this.multiImage = res;
      //         this.mainData.push(
      //           {
      //             id: element.id,
      //             institute_id: element.institute_id,
      //             commTitle: element.commTitle,
      //             commDetails: element.commDetails,
      //             commImage: element.commImage,
      //             createddate: element.createddate,
      //             updateddate: element.updateddate,
      //             multiImage: this.multiImage,
      //             cols:false,

      //           });
      //           if(this.commiData.length == this.mainData.length){
      //             this.open(0);   
      //           }
      //         this.multiImage.push(
      //           {
      //             image: element.commImage
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

