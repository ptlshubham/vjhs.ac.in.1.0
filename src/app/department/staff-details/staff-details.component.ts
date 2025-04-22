import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';
import { StaffService } from 'src/app/core/services/staff.services';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css'],
  standalone: false
})
export class StaffDetailsComponent implements OnInit {
  staffDataTable: any = [];
  departmentData: any = [];
  filterData: any = [];
  selectedDepartment: any = '';
  pa: number = 1;
  constructor(
    private staffService: StaffService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.selectedDepartment = 'ALL'; // Default to "ALL" when the user lands
    this.getStaffDetails();
    this.getDepartmentDetails();
  }
  getDepartmentDetails() {
    this.departmentData = [];
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.departmentData = res;
    })
  }
  selectDepartment(val: any) {
    this.selectedDepartment = val;
    this.filterData = [];
    if (this.selectedDepartment === 'ALL') {
      // If "ALL" is selected, show ALL staff
      this.filterData = this.staffDataTable;
    } else {
      // Filter staff by the selected department
      this.staffDataTable.forEach((element: any) => {
        if (element.departmentName === this.selectedDepartment) {
          this.filterData.push(element);
        }
      });
    }
  }
  slectAll(val: any) {
    this.selectedDepartment = val;
    this.getStaffDetails();
  }
  getStaffDetails() {
    this.filterData = [];
    this.staffService.getAllStaffDetailsData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.staffDataTable = res;
      if (this.selectedDepartment === 'ALL') {
        this.filterData = res; // Show ALL staff if "ALL" is selected
      } else {
        // Filter staff by the selected department
        this.staffDataTable.forEach((element: any) => {
          if (element.departmentName === this.selectedDepartment) {
            this.filterData.push(element);
          }
        });
      }
    });
  }
}