import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  @Input() title: string = 'Sin titulo';
  @Input('labels') donaLabels: string[] = ['Labels1', 'Labels2', 'Labels3'];
  @Input('data') donaValues: number[] = [350, 450, 100];
  @Input('backgroundColor') donaBgColor: string[] = [
    '#6857E6',
    '#009FEE',
    '#F02059',
  ];
  charOptions = {
    resposive: true,
    maintainAspectRatio: false,
  };

  ngOnInit(): void {
    console.log(this.doughnutChartData.datasets);
    // Aca seteamos los valores que vienen como @Input() al objeto doughnutChartData
    this.doughnutChartData.datasets[0].data = this.donaValues;
    this.doughnutChartData.datasets[0].backgroundColor = this.donaBgColor;
    this.doughnutChartData.labels = this.donaLabels;
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.donaLabels,
    datasets: [
      {
        data: this.donaValues,
        backgroundColor: this.donaBgColor,
      },
    ],
  };
}
