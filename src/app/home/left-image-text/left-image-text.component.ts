import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-image-text',
  templateUrl: './left-image-text.component.html',
  styleUrls: ['./left-image-text.component.css'],
  standalone:false
})
export class LeftImageTextComponent implements OnInit {
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

}
