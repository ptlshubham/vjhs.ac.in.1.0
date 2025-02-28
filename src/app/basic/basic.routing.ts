import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { CommitteeComponent } from './committee/committee.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { PlacementComponent } from './placement/placement.component';
import { ResearchComponent } from './research/research.component';
import { CampusLifeComponent } from './campus-life/campus-life.component';
import { NirfComponent } from './nirf/nirf.component';
import { GsirfComponent } from './gsirf/gsirf.component';


export const BasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'infrastructure',
        component: InfrastructureComponent
    },
    {
        path: 'activity',
        component: ActivityComponent
    },
    {
        path: 'committee',
        component: CommitteeComponent
    },
    {
        path: 'placement',
        component: PlacementComponent
    },
    {
        path: 'research',
        component: ResearchComponent
    },
    {
        path: 'campus-life',
        component: CampusLifeComponent
    },
    {
        path: 'nirf',
        component: NirfComponent
    },
    {
        path: 'gsirf',
        component: GsirfComponent
    },
    ]
}];
