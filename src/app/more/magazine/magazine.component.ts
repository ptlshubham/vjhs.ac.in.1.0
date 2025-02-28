import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  magazine: any = [];
  pa: number = 1;
  
  constructor(
    private homeService: HomeService,

  ) { }

  ngOnInit(): void {
    this.getMagazineDetails();

  }
  getMagazineDetails() {
    this.homeService.getMagazineList().subscribe((res: any) => {
      this.magazine = res;
      for (let i = 0; i < this.magazine.length; i++) {
        this.magazine[i].index = i + 1;
      }
      
    })
  }

}

