import {AfterViewInit, Component} from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-algo-system-data',
  templateUrl: './algo-system-data.component.html',
  styleUrls: ['./algo-system-data.component.css', '../user-management/user-management.component.css']
})
export class AlgoSystemDataComponent implements AfterViewInit {

  public lineChartData: Array<any> = [
    { data: [12, 19, 3, 5, 2, 3], label: 'Balance $' }
  ];
  public lineChartLabels: Array<any> = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017'
  ];
  public lineChartOptions: any = {
    responsive: true,
    elements: {
      point: {
        radius: 2
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: '#CFA256',
      pointBackgroundColor: '#CFA256',
      pointBorderColor: '#CFA256',
      pointHoverBackgroundColor: '#CFA256',
      pointHoverBorderColor: '#CFA256'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  // bar chart
  public barChartData: Array<any> = [
    { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3], label: 'Cost' }
  ];
  public barChartLabels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7'
  ];
  public barChartOptions: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.2,
        categoryPercentage: 0.5
      }],
      yAxes: [{
        display: false
      }]
    }
  };
  public barChartColors: Array<any> = [
    {
      backgroundColor: '#2962ff',
      hoverBackgroundColor: '#2962ff',
      hoverBorderWidth: 2,
      hoverBorderColor: '#2962ff'
    }
  ];
  public barChartLegend = false;
  public barChartType = 'bar';

  constructor() {}

  ngAfterViewInit() {
    const chart = c3.generate({
      bindto: '#foo',
      data: {
        columns: [['data', 91.4]],
        type: 'gauge'
      },
      gauge: {
        label: {
          format(value, ratio) {
            return value;
          },
          show: false
        },
        min: 0,
        max: 100,
        units: ' %',
        width: 15
      },
      legend: {
        hide: true
      },
      size: {
        height: 80
      },
      color: {
        pattern: ['#7e74fb']
      }
    });
  }

}
