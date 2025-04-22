import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HomeService } from './core/services/home.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:false
})
export class AppComponent implements OnInit {
  private router: Router;
  staticURL: any = 'www.vjhs.ac.in';
  constructor(
    router: Router,
    private homeService: HomeService
  ) {
    this.router = router;
    this.getInstituteDetails();
  }


  ngOnInit() {
    this.router.events.subscribe(x => {
      if (x instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

  }
  getInstituteDetails() {
    this.homeService.getInstituteDetailsById(this.staticURL).subscribe((res: any) => {
      localStorage.setItem('InstituteId', res[0].id);
      localStorage.setItem('InstituteName', res[0].name);
      localStorage.setItem('InstituteURL', res[0].url);
    })
  }
  title = 'Shree-V.J-Patel-Higher-Secondary-School';
}
