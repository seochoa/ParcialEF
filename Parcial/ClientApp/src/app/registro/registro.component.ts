import { Component, OnInit } from '@angular/core';
import { Apoyo } from '../models/apoyo';
import { ApoyoService } from '../services/apoyo.service';
import { Persona } from '../models/persona';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formGroup: FormGroup;
  Persona: Persona;
  Apoyo:Apoyo;


  constructor(private apoyoService: ApoyoService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.Apoyo = new Apoyo();
    this.buildformpersona();
    
  }

  private buildformpersona()
  {
    this.Persona              = new Persona();
    this.Persona.cedula       = '';
    this.Persona.nombre       = '';
    this.Persona.apellido     = '';
    this.Persona.edad         = 0;
    this.Persona.sexo         = '';
    this.Persona.departamento = '';
    this.Persona.ciudad       = '';

    this.formGroup = this.formBuilder.group
    ({
      cedula       :[this.Persona.cedula, Validators.required],
      nombre       :[this.Persona.nombre, Validators.required],
      apellido     :[this.Persona.apellido,Validators.required],
      edad         :[this.Persona.edad,Validators.required],
      sexo         :[this.Persona.sexo,Validators.required],
      departamento :[this.Persona.departamento,Validators.required] ,
      ciudad       :[this.Persona.ciudad,Validators.required]
    });
  }

  get control(){
    return this.formGroup.controls;
  }

  onReset(){
    this.formGroup.reset();
  }

  onSave(){
    if(this.formGroup.invalid){
      return;
    }
    this.agregar();
    this.onReset();
  }
  
  agregar(){
    this.Apoyo.persona = this.formGroup.value;
    
    this.apoyoService.post(this.Apoyo).subscribe(p=>{
      if (p != null){
        alert('Apoyo Registrado')
        this.Apoyo = p;
      }
    });
  }

}
