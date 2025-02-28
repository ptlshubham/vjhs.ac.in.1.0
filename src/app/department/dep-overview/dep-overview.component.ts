import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/core/services/home.services';
import { StaffService } from 'src/app/core/services/staff.services';

@Component({
  selector: 'app-dep-overview',
  templateUrl: './dep-overview.component.html',
  styleUrls: ['./dep-overview.component.css']
})
export class DepOverviewComponent implements OnInit {
  staffDataTable: any = [];
  departmentData: any = [];
  filterData: any = [];
  selectedDepartment: any = '';
  pa: number = 1;
  studentList: any = [];
  depId: any;
  depMulti: any = [];
  p: number = 1;
  depData: any = {};
  studentAchievementsList: any = [];
  staffAchievementsList: any = [];

  pl: number = 1;
  ps: number = 1;
  constructor(
    private staffService: StaffService,
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute

  ) {
    this.activatedRoute.params.subscribe(params => {
      this.depId = params['id'];
    });
  }

  ngOnInit(): void {
    this.getStaffDetails();
    this.getDepartmentDetails();
    this.selectedDepartment = 'Department';
    this.getStudentDetails();
    this.getachievementsListDetails();
  }
  getDepartmentDetails() {
    this.departmentData = [];
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.departmentData = res;
      this.getdepMultiImages();
      this.departmentData.forEach((element: any) => {
        if (element.id == this.depId) {
          this.depData = element;
          this.depData.images = element.depimage;
        }
      });
    })
  }
  getdepMultiImages() {
    this.homeService.getDepMultiImageById(this.depId).subscribe((res: any) => {
      if (res.length > 0) {
        this.depMulti.push({ image: this.depData.depimage });
        res.forEach((element: any) => {
          this.depMulti.push({ image: element.image });
        });
        this.depData.images = this.depMulti;
      }
    })
  }
  getStaffDetails() {
    this.filterData = [];
    this.staffService.getAllStaffDetailsData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.staffDataTable = res;
      this.staffDataTable.forEach((element: any) => {
        if (element.department == this.depId) {
          this.filterData.push(element);
        }
      });
    })
  }
  getStudentDetails() {
    this.homeService.getStudentList(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.studentList = res;
    })
  }
  getachievementsListDetails() {
    this.homeService.getAchievementsList(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.studentAchievementsList = res.filter((a: any) => a.department == this.depId && a.purpose == 'Student');
      this.staffAchievementsList = res.filter((a: any) => a.department == this.depId && a.purpose == 'Staff');

    })
  }

}
