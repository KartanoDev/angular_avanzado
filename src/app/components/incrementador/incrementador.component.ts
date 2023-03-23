import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `${this.btnClass} btn `;
  }
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  get getPorcentaje() {
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
    if (this.progreso >= 100) {
      this.progreso = 100;
      this.valorSalida.emit(this.progreso);
      return;
    }
    if (this.progreso <= 0) {
      this.progreso = 0;
      this.valorSalida.emit(this.progreso);
      return;
    }
  }
  onChange(nuevoValor: number) {
    console.log('Entra');
    if (nuevoValor >= 100) {
      nuevoValor = 100;
    } else if (nuevoValor <= 0) {
      nuevoValor = 0;
    } else {
      nuevoValor = nuevoValor;
    }
    this.valorSalida.emit(nuevoValor);
  }
}
