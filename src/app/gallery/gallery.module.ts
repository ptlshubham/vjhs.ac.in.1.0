import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { GalleryRoutes } from './gallery.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { LightboxModule } from 'ngx-lightbox';


@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(GalleryRoutes),
    NgbModule,
    NgxPaginationModule,
    LightboxModule 
  ]
})
export class PhotosGalleryModule { }
