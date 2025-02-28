import { Routes } from '@angular/router';
import { DepOverviewComponent } from './dep-overview/dep-overview.component';

export const DepartmentRoutes: Routes = [{
    path: '',
    children: [
   
    {
        path: 'overview/:id',
        component: DepOverviewComponent
    },
    ]
}];
