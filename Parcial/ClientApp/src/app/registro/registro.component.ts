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

  Persona: Persona;
  Apoyo:Apoyo;


  constructor(private apoyoService: ApoyoService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.Apoyo = new Apoyo();
    this.Persona = new Persona();
  }

  
  agregar(){
    this.Apoyo.persona = this.Persona;
    this.apoyoService.post(this.Apoyo).subscribe(p=>{
       if (p != null){
          const menssageBox = this.modalService.open(AlertModalComponent)
          menssageBox.componentInstance.title = "Resultado Operacion";
          menssageBox.componentInstance.message = 'Persona Creada Correctamente';
          this.Apoyo = p;
       }  
    });

  }

}
