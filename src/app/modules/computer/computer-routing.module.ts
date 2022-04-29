import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PcHomeComponent} from "./pc-home/pc-home.component";
import {PcFixeComponent} from "./pc-fixe/pc-fixe.component";
import {PcPortableComponent} from "./pc-portable/pc-portable.component";
import {PcAccessoireComponent} from "./pc-accessoire/pc-accessoire.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'ordinateur', component: PcHomeComponent, children: [
        {path: 'ordinateur', redirectTo: 'ordinateur', pathMatch: 'full'},
        {path: 'pc-fixe', component: PcFixeComponent},
        {path: 'pc-portable', component: PcPortableComponent},
        {path: 'pc-accessoire', component: PcAccessoireComponent},
      ]
    }
  ])],
  exports: [RouterModule]
})
export class ComputerRoutingModule {
}
