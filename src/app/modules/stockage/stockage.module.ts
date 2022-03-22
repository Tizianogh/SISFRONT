import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockageRoutingModule } from './stockage-routing.module';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { CleUsbComponent } from './cle-usb/cle-usb.component';
import { AccessoiresStockageComponent } from './accessoires-stockage/accessoires-stockage.component';

@NgModule({
  declarations: [
    DisqueDurComponent,
    CleUsbComponent,
    AccessoiresStockageComponent,
     ],
  imports: [
    CommonModule,
    StockageRoutingModule
  ]
})
export class StockageModule { }
