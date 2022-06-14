import { Router } from '@angular/router';
import { ServicesService } from './../../../../services/services.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adidas-card',
  templateUrl: './adidas-card.component.html',
  styleUrls: ['./adidas-card.component.scss']
})
export class AdidasCardComponent implements OnInit {
  @Input () public adida!: any;
  constructor(private servicesService:ServicesService, private router:Router) { }

  ngOnInit(): void {
  }

  public editAdidas (adida: any) {
    this.servicesService.editItems(adida);
    this.router.navigate(["/gestion"])
  }

}