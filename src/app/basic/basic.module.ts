import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CommitteeComponent } from './committee/committee.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BasicRoutes } from './basic.routing';
import { HomeModule } from '../home/home.module';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ActivityComponent } from './activity/activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PlacementComponent } from './placement/placement.component';
import { ResearchComponent } from './research/research.component';
import { CampusLifeComponent } from './campus-life/campus-life.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NirfComponent } from './nirf/nirf.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GsirfComponent } from './gsirf/gsirf.component';



@NgModule({
  declarations: [
    AboutComponent,
    CommitteeComponent,
    ContactComponent,
    InfrastructureComponent,
    ActivityComponent,
    PlacementComponent,
    ResearchComponent,
    CampusLifeComponent,
    NirfComponent,
    GsirfComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(BasicRoutes),
    HomeModule,
    NgbDropdownModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    CarouselModule,
    PdfViewerModule,
    NgxPaginationModule,

  ]
})
export class BasicModule { }
