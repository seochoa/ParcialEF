import { Component, OnInit } from '@angular/core';
import { Apoyo } from '../models/apoyo';
import { ApoyoService } from '../services/apoyo.service';
import { Persona } from '../models/persona';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formgroup: FormGroup;
  Persona: Persona;
  Apoyo:Apoyo;
  Filtro: string;

  constructor(private apoyoService: ApoyoService,private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.Apoyo = new Apoyo();
    this.Persona = new Persona();
  }

  private buildform(){
    this.Apoyo = new Apoyo();
    this.Persona = new Persona();
    this.Persona.cedula = '';
    this.Persona.nombre = '';
    this.Persona.apellido = '';
    this.Persona.edad = 0;
    this.Persona.sexo = '';
    this.Persona.departamento = '';
    this.Persona.ciudad = '';
    this.Apoyo.tipoapoyo = '';
    this.Apoyo.vrapoyo= 0;
    this.formgroup = this.formbuilder.group({});
  }


  agregar(){
    this.Apoyo.persona = this.Persona;
    this.apoyoService.post(this.Apoyo).subscribe(p=>{
      if (p != null){
        alert('Apoyo Registrado')
        this.Apoyo = p;
      }
    });
  }

}
