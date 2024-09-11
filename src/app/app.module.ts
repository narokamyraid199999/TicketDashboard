import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ChartComponent } from './Components/dashboard/Components/chart/chart.component';
import { CardComponent } from './Components/dashboard/Components/card/card.component';
import { TableComponent } from './Components/dashboard/Components/table/table.component';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ClipboardModule } from 'ngx-clipboard';
import { FileSaverModule } from 'ngx-filesaver';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    QRCodeModule,
    TooltipModule,
    TableModule,
    InputSwitchModule,
    ClipboardModule,
    FileSaverModule,
    HttpClientModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
