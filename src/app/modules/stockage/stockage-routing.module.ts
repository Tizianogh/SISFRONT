import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StockageHomeComponent} from "./stockage-home/stockage-home.component";
import {StockageHddComponent} from "./stockage-hdd/stockage-hdd.component";
import {StockageAccessoireComponent} from "./stockage-accessoire/stockage-accessoire.component";
import {StockageUsbComponent} from "./stockage-usb/stockage-usb.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'stockage', component: StockageHomeComponent, children: [
        {path: 'stockage', redirectTo: 'stockage', pathMatch: 'full'},
        {path: 'stockage-hdd', component: StockageHddComponent},
        {path: 'stockage-accessoire', component: StockageAccessoireComponent},
        {path: 'stockage-usb', component: StockageUsbComponent},
      ]
    }
  ])],
  exports: [RouterModule]
})
export class StockageRoutingModule {
}
