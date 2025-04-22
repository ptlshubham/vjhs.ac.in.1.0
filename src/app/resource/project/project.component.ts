import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  standalone: false
})
export class ProjectComponent implements OnInit {
  projectData: any = [];
  multiImage: any = [];
  mainData: any = [];
  @ViewChild('descriptionRef') descriptionRef!: ElementRef;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getprojectsDataById();

  }
  getprojectsDataById() {
    this.homeService.getProjectsDetails(localStorage.getItem('InstituteId')).subscribe(async (res: any) => {
      this.projectData = res;

      for (let i = 0; i < this.projectData.length; i++) {
        if (this.projectData[i].id) {
          await this.homeService.getProjectsMultiImageById(this.projectData[i].id).toPromise().then((res: any) => {
            this.multiImage = res;
            this.mainData.push(
              {
                id: this.projectData[i].id,
                institute_id: this.projectData[i].institute_id,
                title: this.projectData[i].title,
                details: this.projectData[i].details,
                image: this.projectData[i].image,
                createddate: this.projectData[i].createddate,
                updateddate: this.projectData[i].updateddate,
                multiImage: this.multiImage,
                cols: false,
                index: i + 1
              });
            if (this.projectData.length == this.mainData.length) {
              this.open(0);
            }
            this.multiImage.push(
              {
                image: this.projectData[i].image
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

