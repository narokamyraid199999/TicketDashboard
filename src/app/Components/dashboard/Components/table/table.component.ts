import { Component } from '@angular/core';

interface ticketOwner {
  name: string;
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

  customers: ticketOwner[] = [
    {
      name: 'tamer',
      ticketNumber: 'C-101',
      ticketPrice: 40,
      cinemaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
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
