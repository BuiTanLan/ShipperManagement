import { Component, OnInit } from '@angular/core';
import { ShipperService } from '../shared/services/shipper.service';
import { Shipper } from '../shared/models/shipper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private serverHttp: ShipperService) { }

  ngOnInit(): void {}
}
