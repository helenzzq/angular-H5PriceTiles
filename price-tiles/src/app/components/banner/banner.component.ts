import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  netWorthToday = 0;
  todaysDate!: Date;

  ngOnInit(): void {
    setInterval(() => {
      this.initDate();
    }, 1000);
  }

  initDate() {
    this.todaysDate= new Date;
  }

}
