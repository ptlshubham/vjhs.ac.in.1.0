import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
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
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxPaginationModule } from 'ngx-pagination';
import { SessionComponent } from './session/session.component';
import { StructureComponent } from './structure/structure.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    InfrastructureComponent,
    ActivityComponent,
    SessionComponent,
    StructureComponent
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
