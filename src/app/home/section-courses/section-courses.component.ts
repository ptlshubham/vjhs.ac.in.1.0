import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-section-courses',
  templateUrl: './section-courses.component.html',
  styleUrls: ['./section-courses.component.css']
})
export class SectionCoursesComponent implements OnInit {
  departmentData: any = [];

  constructor(
    private homeService: HomeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getDepartmentDetails();
  }
  handleClick(id: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/department/overview', id]);
    });
  }
  getDepartmentDetails() {
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.departmentData = res.sort((a: any, b: any) => a.department.localeCompare(b.department));

    })
  }
}
