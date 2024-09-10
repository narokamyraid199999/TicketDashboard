import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor() {}

  search: string = '';
  isFavourite: boolean = false;

  customers: any[] = [
    {
      name: 'tamer',
      country: { name: 'palestine', code: 'ps' },
      company: 'Angular Developer',
      representative: { name: 'Angular Developer ' },
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
