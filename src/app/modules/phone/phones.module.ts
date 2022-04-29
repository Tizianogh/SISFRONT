import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import { TelPortableComponent } from './tel-port/tel-portable.component';
import { TelFixeComponent } from './tel-fixe/tel-fixe.component';
import { TelAccessoireComponent } from './tel-accessoire/tel-accessoire.component';
import { TelHomeComponent } from './tel-home/tel-home.component';
import {ComputerModule} from "../computer/computer.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TelPortableComponent,
    TelFixeComponent,
    TelAccessoireComponent,
    TelHomeComponent,
  ],
  imports: [
    CommonModule,
    PhonesRoutingModule,
    ComputerModule
  ],
  exports: [RouterModule]
})
export class PhonesModule { }
