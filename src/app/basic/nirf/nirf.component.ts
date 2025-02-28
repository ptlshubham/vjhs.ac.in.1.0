import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nirf',
  templateUrl: './nirf.component.html',
  styleUrls: ['./nirf.component.css']
})
export class NirfComponent implements OnInit {
  src = '/assets/pdf/nirf.pdf';
  src2 = '/assets/pdf/nirf-details.pdf';


  constructor() { }

  ngOnInit(): void {
  }
  downloadFile() {
    const link = document.createElement('a');
    link.href = '/assets/pdf/nirf.pdf';
    link.download = 'Nirf-College.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadFile2() {
    const link = document.createElement('a');
    link.href = '/assets/pdf/nirf-details.pdf';
    link.download = 'Nirf-Overall.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
