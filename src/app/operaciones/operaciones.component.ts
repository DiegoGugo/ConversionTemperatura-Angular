import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {
  titulo = 'Cálculo de Temperaturas';

  numero : number = 0;
  resultadosFarenheit: number = 0;
  resultadosKelvin: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(): void{
    this.farenheit();
    this.kelvin();
  }

  farenheit():void{
    this.resultadosFarenheit = 1.8 * this.numero + 32;
  }

  kelvin():void{
    this.resultadosKelvin = this.numero + 273.15;
  }
}
