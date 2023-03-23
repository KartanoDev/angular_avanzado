import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css'],
})
export class Grafica1Component {
  public labels2: string[] = ['Coches', 'Motos', 'Patinetes Elécticos'];
  public data2: number[] = [100, 200, 40];
}
