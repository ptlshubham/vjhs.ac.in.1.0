import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  notificationData: any = [];

  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.getNotificationDetails();
  }

  getNotificationDetails() {
    this.homeService.getNotificationDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      const currentDate = new Date();
      this.notificationData = res.filter((a: any) => {
        const startDate = new Date(a.startDate);
        const endDate = new Date(a.endDate);
        return a.isactive == true && currentDate >= startDate && currentDate <= endDate;
      });
    });
  }
 
}