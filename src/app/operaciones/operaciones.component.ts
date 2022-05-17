import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {
  titulo = 'Cálculo Temperaturas';
  resultadoCentigrados: number = 0;
  resultadosFarenheit: number = 0;
  resultadosKelvin: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  centigrados():void{

  }
  farenheir():void{
    
  }
  kelvin():void{
    
  }
}
