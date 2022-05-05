import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PhonesModule} from './modules/phone/phones.module';
import {ComputerModule} from './modules/computer/computer.module';
import {StockageModule} from './modules/stockage/stockage.module';
import {HomeComponent} from './home/home.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {HttpClientModule} from '@angular/common/http';
import {CreateArticleComponent} from './create-article/create-article.component';
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanierComponent } from './panier/panier.component';
import { PcHomeComponent } from './modules/computer/pc-home/pc-home.component';
import {CreateArticleGuardGuard} from "./guard/Article/create-article-guard.guard";
import { GestionComponent } from './gestion/gestion.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConnexionComponent,
    CreateArticleComponent,
    PanierComponent,
    PcHomeComponent,
    GestionComponent,
    UpdateArticleComponent,
    DetailsArticleComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PhonesModule,
    ComputerModule,
    StockageModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [CreateArticleGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
