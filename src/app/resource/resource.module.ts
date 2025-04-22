import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ResourceRoutes } from './resource.routing';
import { PhotoComponent } from './photo/photo.component';
import { ResultComponent } from './result/result.component';
import { ProjectComponent } from './project/project.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    PhotoComponent,
    ResultComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ResourceRoutes),
    NgbModule,
    NgxPaginationModule
  ]
})
export class ResourceModule { }
