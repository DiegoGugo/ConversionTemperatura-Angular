import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {
  titulo = 'Cálculo Temperaturas';

  numero : number = 0;
  resultadoCentigrados: number = 0;
  resultadosFarenheit: number = 0;
  resultadosKelvin: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  centigrados():void{

  }
  farenheit():void{
    this.resultadosFarenheit =
    1.8 * this.numero + 32 
  }
  kelvin():void{
    
  }
}
