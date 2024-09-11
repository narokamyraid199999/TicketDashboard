import { Component } from '@angular/core';

interface ticketOwner {
  user: { name: string; image: string; phone: string };
  ticketNumber: string;
  ticketPrice: number;
  cinemaName: string;
  numberOfPeople: number;
  numberOfPayment: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor() {}

  search: string = '';
  isFavourite: boolean = false;

  onSuc(event: any) {}

  onErr(event: any) {}

  customers: ticketOwner[] = [
    {
      user: {
        name: 'أحمد محمود',
        image:
          'https://static.vecteezy.com/system/resources/previews/011/757/232/original/ma-m-a-letter-logo-design-initial-letter-ma-linked-circle-uppercase-monogram-logo-red-and-blue-ma-logo-m-a-design-ma-m-a-vector.jpg',
        phone: '0123456789',
      },
      ticketNumber: 'C-101',
      ticketPrice: 40,
      cinemaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numberOfPeople: 1,
      numberOfPayment: 'مرة واحدة',
    },
    {
      user: {
        name: 'محمد الغريب',
        image:
          'https://t3.ftcdn.net/jpg/03/35/34/80/360_F_335348056_yY8QyHP966KePjyutnns1Puwt2bnngZc.jpg',
        phone: '0123456789',
      },
      ticketNumber: 'C-102',
      ticketPrice: 30,
      cinemaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numberOfPeople: 1,
      numberOfPayment: 'مرة واحدة',
    },
    {
      user: {
        name: 'محمد الغريب',
        image:
          'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid',
        phone: '0123456789',
      },
      ticketNumber: 'C-102',
      ticketPrice: 45,
      cinemaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numberOfPeople: 1,
      numberOfPayment: 'مرة واحدة',
    },
    {
      user: {
        name: 'محمد الغريب',
        image:
          'https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg',
        phone: '0123456789',
      },
      ticketNumber: 'C-103',
      ticketPrice: 54,
      cinemaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numberOfPeople: 1,
      numberOfPayment: 'مرة واحدة',
    },
    {
      user: {
        name: 'محمد الغريب',
        image:
          'https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg',
        phone: '0123456789',
      },
      ticketNumber: 'C-103',
      ticketPrice: 54,
      cinemaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      numberOfPeople: 1,
      numberOfPayment: 'مرة واحدة',
    },
  ];

  first = 0;

  rows = 10;

  // ngOnInit() {
  //     // this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
  // }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }
}
