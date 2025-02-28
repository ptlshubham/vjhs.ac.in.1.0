import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DepartmentRoutes } from './department.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { DepOverviewComponent } from './dep-overview/dep-overview.component';



@NgModule({
  declarations: [
    DepOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DepartmentRoutes),
    NgbModule,
    NgxPaginationModule
  ]
})
export class DepartmentModule { }
