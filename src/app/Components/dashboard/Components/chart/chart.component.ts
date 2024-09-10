import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

interface usingRate {
  name: string;
  code: string;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.chartInit();
  }

  usage: usingRate[] = [
    { name: 'سنويا', code: 'Yearly' },
    { name: 'شهريا', code: 'monthly' },
    { name: 'يوميا', code: 'daily' },
  ];

  currentUsage: usingRate = this.usage[0];

  chartInit() {
    type EChartsOption = echarts.EChartsOption;
    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      color: ['#8A74F9', '#8A74F9', '#8A74F9', '#8A74F9', '#8A74F9'],
      title: {
        text: '',
      },
      textStyle: {
        fontSize: 18,
      },

      tooltip: {
        trigger: 'axis',
        textStyle: {
          fontSize: 18,
        },
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#8A74F9',
          },
        },
      },
      legend: {
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            fontSize: 18,
            color: '#9291A5',
          },
          data: [
            'ديسمبر',
            'نوفمبر',
            'أكتوبر',
            'سبتمبر',
            'أغسطس',
            'يوليو',
            'يونيو',
            'مايو',
            'أبريل',
            'مارس',
            'فبراير',
            'يناير',
          ],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'أستخدام',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#DDD7FD',
              },
              {
                offset: 1,
                color: '#E6E1FE',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [100, 150, 50, 100, 250, 170, 180, 150, 150, 100, 50, 250],
        },
      ],
    };

    option && myChart.setOption(option);
  }
}
