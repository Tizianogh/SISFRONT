import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TelHomeComponent} from "./tel-home/tel-home.component";
import {TelFixeComponent} from "./tel-fixe/tel-fixe.component";
import {TelPortableComponent} from "./tel-port/tel-portable.component";
import {TelAccessoireComponent} from "./tel-accessoire/tel-accessoire.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'telephone', component: TelHomeComponent, children: [
        {path: 'telephone', redirectTo: 'telephone', pathMatch: 'full'},
        {path: 'tel-fixe', component: TelFixeComponent},
        {path: 'tel-portable', component: TelPortableComponent},
        {path: 'tel-accessoire', component: TelAccessoireComponent},
      ]
    }
  ])],
  exports: [RouterModule]
})
export class PhonesRoutingModule { }
