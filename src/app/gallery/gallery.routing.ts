import { Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';

export const GalleryRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'photos',
            component: PhotosComponent
        }

    ]
}];
