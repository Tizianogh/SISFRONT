import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {HomeComponent} from './home/home.component';
import {AccessoiresPcComponent} from './modules/computer/accessoires-pc/accessoires-pc.component';
import {PcFixeComponent} from './modules/computer/pc-fixe/pc-fixe.component';
import {PcPortableComponent} from './modules/computer/pc-portable/pc-portable.component';
import {AccessoiresPhonesComponent} from './modules/phones/accessoires-phones/accessoires-phones.component';
import {SmartphoneComponent} from './modules/phones/smartphone/smartphone.component';
import {TelFixeComponent} from './modules/phones/tel-fixe/tel-fixe.component';
import {AccessoiresStockageComponent} from './modules/stockage/accessoires-stockage/accessoires-stockage.component';
import {CleUsbComponent} from './modules/stockage/cle-usb/cle-usb.component';
import {DisqueDurComponent} from './modules/stockage/disque-dur/disque-dur.component';
import {PanierComponent} from "./panier/panier.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'pc-portable', component: PcPortableComponent},
  {path: 'pc-fixe', component: PcFixeComponent},
  {path: 'accessoires-pc', component: AccessoiresPcComponent},
  {path: 'smartphone', component: SmartphoneComponent},
  {path: 'tel-fixe', component: TelFixeComponent},
  {path: 'accessoires-phones', component: AccessoiresPhonesComponent},
  {path: 'cle-usb', component: CleUsbComponent},
  {path: 'disque-dur', component: DisqueDurComponent},
  {path: 'accessoires-stockage', component: AccessoiresStockageComponent},
  {path: 'create-article', component: CreateArticleComponent},
  {path: 'panier', component: PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
