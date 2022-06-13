import { ServicesService } from './../../../../services/services.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zapascard',
  templateUrl: './zapascard.component.html',
  styleUrls: ['./zapascard.component.scss']
})
export class ZapascardComponent implements OnInit {
 @Input () public zapa!: any;
  constructor(private servicesService:ServicesService, private router:Router) { }

  ngOnInit(): void {
  }

  public editzapa (zapa: any) {
    this.servicesService.editItem(zapa);
    this.router.navigate(["/gestion"])
  }

}
