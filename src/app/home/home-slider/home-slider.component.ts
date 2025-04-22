import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
  standalone:false
})
export class HomeSliderComponent implements OnInit {

  imagesData: any = [];
  sliderImages: any = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getImagesDataById();
  }

  getImagesDataById() {
    this.sliderImages = [];
    this.homeService.getBannersImagesById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.imagesData = res;
      this.imagesData.forEach((element: any) => {
        if (element.purpose == 'slider') {
          this.sliderImages.push(element);
        }
      });
    })
  }
}

