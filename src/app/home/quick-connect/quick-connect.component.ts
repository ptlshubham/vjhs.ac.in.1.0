import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-connect',
  templateUrl: './quick-connect.component.html',
  styleUrls: ['./quick-connect.component.css'],
  standalone:false
})
export class QuickConnectComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  openLinks(id: any) {
    this.router.navigate(['/more/links', id]);
  }
}
