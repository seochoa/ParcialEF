import { Component, OnInit } from '@angular/core';
import { Apoyo } from '../models/apoyo';
import { ApoyoService } from '../services/apoyo.service';
import { Persona } from '../models/persona';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formGroupPersona: FormGroup;
  formGroupApoyo: FormGroup;
  persona: Persona;
  apoyo:Apoyo;


  constructor(private apoyoService: ApoyoService,private modalService : NgbModal, private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.buildform();
  }
  private buildform(){

    this.persona = new Persona();
    this.persona.cedula= '';
    this.persona.nombre = '';
    this.persona.apellido= '';
    this.persona.edad = null;
    this.persona.sexo= '';
    this.persona.departamento = '';
    this.persona.ciudad = '';

    this.formGroupPersona = this.formbuilder.group({
      cedula       :[this.persona.cedula, Validators.required],
      nombre       :[this.persona.nombre, Validators.required],
      apellido     :[this.persona.apellido,Validators.required],
      edad         :[this.persona.edad,Validators.required],
      sexo         :[this.persona.sexo,Validators.required],
      departamento :[this.persona.departamento,Validators.required],
      ciudad       :[this.persona.ciudad,Validators.required],
    });

    this.apoyo = new Apoyo();
    this.apoyo.idapoyo = '';
    this.apoyo.tipoapoyo = '';
    this.apoyo.vrapoyo = null;

    this.formGroupApoyo = this.formbuilder.group({
      idapoyo       :[this.apoyo.idapoyo, Validators.required],
      tipoapoyo     :[this.apoyo.tipoapoyo, Validators.required],
      vrapoyo       :[this.apoyo.vrapoyo,Validators.required],
    });
  }

  get control(){
    return this.formGroupPersona.controls;
  }

  get control2(){
    return this.formGroupApoyo.controls;
  }

  onSave(){
    if(this.formGroupApoyo.invalid ){
      return;
    }
    this.agregar();
 
  }
  onReset(){
    this.formGroupPersona.reset();
    this.formGroupApoyo.reset();
  }

  
  agregar(){
    this.apoyo =this.formGroupApoyo.value;
    this.apoyo.persona = this.formGroupPersona.value;
    console.log(this.apoyo);
    
    this.apoyoService.post(this.apoyo).subscribe(p=>{
        if (p != null){
           const menssageBox = this.modalService.open(AlertModalComponent)
           menssageBox.componentInstance.title = "Resultado Operacion";
           menssageBox.componentInstance.message = 'Persona Creada Correctamente';
           this.apoyo = p;
        }  
    });
    this.onReset();

  }


}
