import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { StructureComponent } from './structure/structure.component';
import { SessionComponent } from './session/session.component';



export const BasicRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'infra',
            component: InfrastructureComponent
        },
        {
            path: 'activity/:id',
            component: ActivityComponent
        },
        {
            path: 'contact',
            component: ContactComponent
        },
        {
            path: 'structure',
            component: StructureComponent
        },
        {
            path: 'session',
            component: SessionComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
    ]
}];
