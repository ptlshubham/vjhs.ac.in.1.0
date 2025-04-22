import { Routes } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';
import { ProjectComponent } from './project/project.component';
import { ResultComponent } from './result/result.component';

export const ResourceRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'photo',
        component: PhotoComponent
    },
    {
        path: 'result',
        component: ResultComponent
    },
    
    {
        path: 'project',
        component: ProjectComponent
    },
    ]
}];
