import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { TelFixeComponent } from './tel-fixe/tel-fixe.component';
import { AccessoiresPhonesComponent } from './accessoires-phones/accessoires-phones.component';



@NgModule({
  declarations: [
    SmartphoneComponent,
    TelFixeComponent,
    AccessoiresPhonesComponent,
    
  ],
  imports: [
    CommonModule,
    PhonesRoutingModule
  ]
})
export class PhonesModule { }
