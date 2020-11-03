import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../models/persona';
import { Apoyo } from '../models/apoyo';

@Pipe({
  name: 'filtroPersona'
})
export class FiltroPersonaPipe implements PipeTransform {

  transform(Apoyo: Apoyo[], Filtro: string): any {
    if(Filtro == null)return Apoyo;
    return Apoyo.filter(p=>p.tipoapoyo.indexOf(Filtro) !==-1);
  }

}
