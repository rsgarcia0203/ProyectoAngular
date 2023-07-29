import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { DataService } from 'src/app/providers/DataService/data.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit{
  @ViewChild('myChart') myChart!: ElementRef;

  @Input() chartLabels!: string[];
  @Input() chartData!: number[];
  @Input() chartName!: string;
  @Input() chartId!:string;
  @Input() chartSecuence!:number;

  public chartID: string/*  = crypto.randomUUID() */;

  constructor (private data:DataService) {this.chartID = 'chart'+this.data.s; this.data.next()}
  /* ngOnInit(): void {
    const ctx = this.myChart.nativeElement.getContext('2d');
    new Chart<any>(ctx, {
      type: this.chartType,
      data: {
        labels: this.chartLabels,
        datasets: [{
          data: this.chartData
        }]
      }
    });
  } */

  ngOnInit() {
    console.log(this.chartID);
    const grafico = new Chart("mychart", {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: 'Datos del gráfico',
          data: this.chartData, // Se utilizan los datos pasados como input al componente
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true,
        
        /* title: {
          display: true,
          text: this.chartName
        } */
        /* scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        } */
      }
    });
  }

}
