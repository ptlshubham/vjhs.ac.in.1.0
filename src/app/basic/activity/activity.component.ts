import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  standalone: false
})
export class ActivityComponent implements OnInit {
  activity: any;
  activityData: any = [];
  @ViewChild('descriptionRef') descriptionRef!: ElementRef;
  multiImage: any = [];
  mainData: any = [];
  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.activity = params['id']; // Convert to string
      this.getActivityDetailsById(this.activity);
      this.mainData = [];
      this.activityData = [];
    });
  }

  ngOnInit(): void {
  }

  getActivityDetailsById(id: any) {
    this.homeService.getActivityDetails(localStorage.getItem('InstituteId')).subscribe(async (res: any) => {
      this.activityData = res.filter((item: any) => item.purpose == id);
      for (let i = 0; i < this.activityData.length; i++) {
        if (this.activityData[i].purpose == id) {
          await this.homeService.getActivityMultiImageById(this.activityData[i].id).toPromise().then((res: any) => {
            this.multiImage = res;
            this.mainData.push(
              {
                id: this.activityData[i].id,
                institute_id: this.activityData[i].institute_id,
                purpose: this.activityData[i].purpose,
                title: this.activityData[i].title,
                details: this.activityData[i].details,
                image: this.activityData[i].image,
                createddate: this.activityData[i].createddate,
                updateddate: this.activityData[i].updateddate,
                multiImage: this.multiImage,
                cols: false,
                index: i + 1
              });
            if (this.activityData.length == this.mainData.length) {
              this.open(0);
            }
            this.multiImage.push(
              {
                image: this.activityData[i].image
              }
            )
          });
        }
      }
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

