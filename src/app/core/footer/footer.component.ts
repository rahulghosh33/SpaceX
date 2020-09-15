import { Component, OnInit } from '@angular/core';
import { AppConst } from './../../app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  developerName = AppConst.DEVELOPER_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
