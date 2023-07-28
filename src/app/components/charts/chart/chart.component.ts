import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  @ViewChild('myChart') myChart!: ElementRef;

  @Input() chartType!: string;
  @Input() chartLabels!: string[];
  @Input() chartData!: number[];

  ngOnInit(): void {
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
  }
}
