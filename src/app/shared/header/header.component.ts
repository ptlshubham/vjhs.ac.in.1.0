import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { config } from 'rxjs';
import { WebNavbar } from 'src/app/core/model/web-navbar.model';
import { HomeService } from 'src/app/core/services/home.services';
import { StaffService } from 'src/app/core/services/staff.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:false
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  isSticky: boolean = false;
  public collapsed = true;
  readMore = false;
  public navDetails: WebNavbar[] = [];
  staffDataTable: any = [];
  siteUpdate: any = {};
  public webNavbarModel: WebNavbar = new WebNavbar;
  navContact: any;
  navEmail: any;
  navLogo: any;
  marqueeData: any = [];
  sliderNews: any = [];
  depDetails: any = [];

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor(
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private staffService: StaffService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    // config.backdrop = 'static';
    // config.keyboard = false;
    this.getStaffDetails();
    this.getLastUpdateSite();
    this.getdepDataById();
    // this.getNewsMaruqeeDetails();
  }
  moreOpen() {
    this.readMore = true;
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg', scrollable: true },);
  }
  searchSchool(id: any) {
    this.router.navigate(['/more/search', id]);

  }
  openLinks(id: any) {
    this.router.navigate(['/more/links', id]);
  }
  openActivity(id:any){
    this.router.navigate(['/basic/activity', id]);
  }
  getStaffDetails() {
    this.staffService.getBirthdayListData().subscribe((res: any) => {
      this.staffDataTable = res;
    })
  }
  getdepDataById() {
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.depDetails = res.sort((a: any, b: any) => a.department.localeCompare(b.department));
    });
  }
  getLastUpdateSite() {
    this.homeService.getLastUpdateSiteByIdURL(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.siteUpdate = res[0];
    })
  }
  handleClick(id: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/department/overview', id]);
    });
  }
}
