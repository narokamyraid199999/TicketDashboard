import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ChartComponent } from './Components/dashboard/Components/chart/chart.component';
import { CardComponent } from './Components/dashboard/Components/card/card.component';
import { TableComponent } from './Components/dashboard/Components/table/table.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ChartComponent, CardComponent, TableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
