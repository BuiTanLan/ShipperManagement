import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from './services/common.service';
import { ServerHttpService } from './services/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  public isOpened = false;
  public totalOrder = 0;

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService
  ) {}

  ngOnInit(): void {
    this.common.totalOrder$.subscribe((total) => {
      this.totalOrder = total;
    });
    if (this.common.totalOrder === 0) {
      this.serverHttp.getOrder().subscribe((data) => {
        this.common.setTotalOrder(data.length);
      });
    }
  }

  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }

  public closeLeftSide() {
    this.isOpened = false;
  }
}
