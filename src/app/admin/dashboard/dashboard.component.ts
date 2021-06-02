import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

pfn: any = '';
pln: any = '';
pnn: any = '';
pan: any = '';
pen: any = '';
pidn: any = '';
  ngOnInit(): void {
    const pf =  localStorage.getItem('pfname');
    const pl = localStorage.getItem('plname');
    const pn = localStorage.getItem('pnumber');
    const pa = localStorage.getItem('paddress');
    const pe = localStorage.getItem('pemail');
    const pi = localStorage.getItem('pid');
    this.pfn = pf;
    this.pln = pl;
    this.pnn = pn;
    this.pan = pa;
    this.pen = pe;
    this.pidn = pi;
  }

}
