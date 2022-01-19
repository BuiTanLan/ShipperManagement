import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../services/server-http.service';
import { shipper } from '../models/Shipper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private serverHttp: ServerHttpService) { }

  ngOnInit(): void {}
}
