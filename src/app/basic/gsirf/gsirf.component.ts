import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gsirf',
  templateUrl: './gsirf.component.html',
  styleUrls: ['./gsirf.component.css']
})
export class GsirfComponent implements OnInit {
  src = '/assets/pdf/gsirf-certi.pdf';
  src2 = '/assets/pdf/gsirf-details.pdf';


  constructor() { }

  ngOnInit(): void {
  }
  downloadFile() {
    const link = document.createElement('a');
    link.href = '/assets/pdf/gsirf-certi.pdf';
    link.download = 'Certificate.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadFile2() {
    const link = document.createElement('a');
    link.href = '/assets/pdf/gsirf-details.pdf';
    link.download = 'Gsirf-Details.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
