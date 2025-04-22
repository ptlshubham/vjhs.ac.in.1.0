import { Routes } from '@angular/router';
import { IpcellComponent } from './ipcell/ipcell.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'basic',
        loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
    },
    {
        path: 'resource',
        loadChildren: () => import('./resource/resource.module').then(m => m.ResourceModule)
    },
    {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    },
    {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then(m => m.PhotosGalleryModule)
    },
    {
        path: 'more',
        loadChildren: () => import('./more/more.module').then(m => m.MoreModule)
    },
    {
        path: 'ipcell',
        component: IpcellComponent
    },


];
