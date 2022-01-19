import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';
import { shipper } from '../Models/Shipper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private serverHttp: ServerHttpService) { }

  ngOnInit(): void {}
}
