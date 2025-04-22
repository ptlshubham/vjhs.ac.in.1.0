import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Lightbox } from 'ngx-lightbox';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  standalone: false
})
export class PhotosComponent implements OnInit {
  imagesData: any = [];
  galleryImg: any = [];
  pa: number = 1;
  p: number = 1;
  linksData: any = [];

  constructor(
    private homeService: HomeService,
    private _lightbox: Lightbox,
    private sanitizer: DomSanitizer

  ) { 
  }

  ngOnInit(): void {
    this.getImagesDataById();
  }
  openVideos(){
    this.getVideoLinksData();
  }
  getImagesDataById() {
    this.galleryImg = [];
    this.homeService.getBannersImagesById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.imagesData = res;
      this.imagesData.forEach((element: any) => {
        if (element.purpose == 'image') {
          this.galleryImg.push({
            src: 'https://api.cesociety.in' + element.image,
            thumb: 'https://api.cesociety.in' + element.image,
            caption: element.title,
            keyword: element.keyword,
          });
        }
      });
      
    });
  }

  openZoomGallery(index: number): void {
    // open lightbox
    this._lightbox.open(this.galleryImg, index, {
      wrapAround: true, showImageNumberLabel: true, showZoom: true,centerVertically: true,
    });
  }

  getVideoLinksData() {

    this.homeService.getVideoDetails(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.linksData = res.filter((link: any) => link.isactive == true);
    })
  }
  sanitizeUrl(link: string): SafeResourceUrl {
    let embedUrl = '';

    if (link.includes('youtube.com/watch?v=')) {
      // Standard YouTube URL
      const videoId = link.split('v=')[1].split('&')[0]; // Handle potential query parameters
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (link.includes('youtu.be/')) {
      // Shortened YouTube URL
      const videoId = link.split('.be/')[1].split('?')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (link.includes('youtube.com/live/')) {
      // YouTube Live URL
      const videoId = link.split('/live/')[1].split('?')[0]; // Extract video ID
      embedUrl = `https://www.youtube.com/embed/${videoId}`; // Convert to embed URL
    } else if (link.includes('youtube.com/embed/')) {
      // Already an embed URL
      embedUrl = link;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

 
}