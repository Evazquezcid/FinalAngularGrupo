import { ServicesService } from './../../services/services.service';
import { ZapasInterface } from './../../models/zapasInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.scss']
})
export class AdidasComponent implements OnInit {
  public adidas :ZapasInterface [] = [];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getAdidas().subscribe((adidata:any) =>{
      this.adidas = adidata
    })
  }

}
