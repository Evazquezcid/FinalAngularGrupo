import { Router } from '@angular/router';
import { ServicesService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  public zapaForm!: FormGroup;
  public submmited : boolean = false;
  public newZapa = this.servicesService.zapasData;
  public zapaID = this.servicesService.zapasData.id;

  
  constructor(private formBuilder: FormBuilder,private servicesService:ServicesService,private router:Router) { }


  ngOnInit(): void {

    this.servicesService.clearZapa();
    this.zapaForm = this.formBuilder.group({
      marca: [this.newZapa.marca, [Validators.required, Validators.minLength(1)]],
      modelo: [this.newZapa.modelo, [Validators.required, Validators.minLength(1)]],
      imagen: [this.newZapa.imagen, [Validators.required]],
      precio: [this.newZapa.precio, [Validators.required, Validators.minLength(1)]]
   
    });

    this.zapaForm.valueChanges.subscribe((changes)=>{
    this.newZapa = changes;
    });

  }

  public onSubmit() {
   
    if (this.zapaID !== "") {
     this.servicesService.putZapa(this.zapaID, this.newZapa).subscribe()
      alert("Zapa edited");
    } else 
      this.servicesService.postZapa(this.newZapa).subscribe();
      alert("Zapa created");

      this.zapaForm.reset();
      this.router.navigate(["/nike"]);
    }

    public delete() {
    
      this.servicesService.deleteZapa(this.newZapa.id).subscribe();
      
      this.servicesService.clearZapa();
      alert("Zapa deleted");
      this.router.navigate(["/nike"]);
    }
  

  }

  

  


     







