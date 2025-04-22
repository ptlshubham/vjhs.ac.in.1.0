import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css'],
  standalone: false
})
export class PaperComponent implements OnInit {
  departmentData: any = [];
  yearList: any = [];
  questionPapers: any = [];
  selectedDepartment: any = 'Select Department';
  selectedYear: any = '';
  selectedSemester: any = '';

  papersList: any = [];
  pa: number = 1;
  semesterdata: any = [
    { name: 'SEM 1' },
    { name: 'SEM 2' },
    { name: 'SEM 3' },
    { name: 'SEM 4' },
    { name: 'SEM 5' },
    { name: 'SEM 6' },
    { name: 'SEM 7' },
    { name: 'SEM 8' },
  ];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getYearDetails();
    this.getDepartmentDetails();
  }

  /**
   * Fetches year data and adds an "ALL" option.
   * The years are sorted in descending order.
   */
  getYearDetails() {
    this.homeService.getYearData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      if (Array.isArray(res)) {
        this.yearList = [{ year: 'ALL' }, ...res.filter((year: any) => year != null).sort((a: any, b: any) => b - a)];
      } else {
        this.yearList = [{ year: 'ALL' }];
      }
    });
  }


  /**
   * Fetches department data.
   */
  getDepartmentDetails() {
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.departmentData = res || [];
    });
  }

  /**
   * Selects the department and refreshes the papers list.
   */
  selectDepartment(val: any) {
    this.selectedDepartment = val;
    this.getPapersDetails();
  }

  /**
   * Selects the year and refreshes the papers list.
   * Resets the year filter if "ALL" is selected.
   */
  selectYear(val: any) {
    if (val === 'ALL') {
      this.selectedYear = '';
    } else {
      this.selectedYear = val;
    }
    this.getPapersDetails();
  }

  /**
   * Selects the semester and refreshes the papers list.
   */
  selectSemester(val: any) {
    this.selectedSemester = val;
    this.getPapersDetails();
  }

  /**
   * Fetches and filters question papers based on selected filters.
   */
  getPapersDetails() {
    if (!this.selectedDepartment || this.selectedDepartment === 'Select Department') {
      this.papersList = [];
      return;
    }

    this.homeService.getQuestionData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.questionPapers = res || [];
      this.papersList = this.questionPapers.filter((element: any) => {
        if (element.department !== this.selectedDepartment) return false;
        if (this.selectedSemester && element.semester !== this.selectedSemester) return false;
        if (this.selectedYear && element.year !== this.selectedYear) return false;
        return true;
      });
    });
  }
}
