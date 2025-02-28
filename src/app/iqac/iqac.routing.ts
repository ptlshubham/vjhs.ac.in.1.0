import { Routes } from '@angular/router';
import { NaacMainComponent } from './naac-main/naac-main.component';

export const IqacRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'naac',
        component: NaacMainComponent
    }
    ]
}];
