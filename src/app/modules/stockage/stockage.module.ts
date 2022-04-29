import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockageRoutingModule } from './stockage-routing.module';
import { StockageHomeComponent } from './stockage-home/stockage-home.component';
import {StockageUsbComponent} from "./stockage-usb/stockage-usb.component";
import {StockageHddComponent} from "./stockage-hdd/stockage-hdd.component";
import {StockageAccessoireComponent} from "./stockage-accessoire/stockage-accessoire.component";
import {ComputerModule} from "../computer/computer.module";

@NgModule({
  declarations: [
    StockageUsbComponent,
    StockageHddComponent,
    StockageAccessoireComponent,
    StockageHomeComponent,
     ],
  imports: [
    CommonModule,
    StockageRoutingModule,
    ComputerModule
  ]
})
export class StockageModule { }
