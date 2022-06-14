import { ServicesService } from './../../services/services.service';
import { ZapasInterface } from './../../models/zapasInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.scss']
})
export class NikeComponent implements OnInit {
  public zapas :ZapasInterface [] = [];
  public zapasFiltradas!: any;


  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getZapas().subscribe((data: any) =>{
      this.zapas = data;
      this.zapasFiltradas= this.zapas;
    });
  }
  public filtrarZapa = (valorInput: string) => {
    this.zapasFiltradas = this.zapas.filter(zapa=> {
      return zapa.modelo.toLowerCase().includes(valorInput.toLowerCase());
    });
    
  }

}
