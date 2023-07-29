import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  template: '<canvas id="{{id}}"></canvas>',
  //templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, AfterViewInit{
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;

  @Input() chartLabels!: string[];
  @Input() chartData!: number[];
  @Input() chartName!: string;
  @Input() prefix!: string;


  protected id:string = '';

  constructor (private elementRef: ElementRef) { this.id = this.elementRef.nativeElement.id+"_chart" }
  
  ngOnInit() {
    this.id = this.elementRef.nativeElement.id + "_" + this.prefix + "_chart";
  }

  ngAfterViewInit() {
    new Chart(this.id, {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: 'Datos de la compañía',
          data: this.chartData, // Se utilizan los datos pasados como input al componente
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true,
      }
    });
  }

}
