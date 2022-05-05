import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {HomeComponent} from './home/home.component';
import {PanierComponent} from "./panier/panier.component";
import {CreateArticleGuardGuard} from "./guard/Article/create-article-guard.guard";
import {GestionComponent} from "./gestion/gestion.component";
import {UpdateArticleComponent} from "./update-article/update-article.component";
import {DetailsArticleComponent} from "./details-article/details-article.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', component: HomeComponent, pathMatch: 'full',
      children: [
        {path: 'ordinateur', loadChildren: () => import('./modules/computer/computer.module').then(m => m.ComputerModule)},
        {path: 'telephone', loadChildren: () => import('./modules/phone/phones.module').then(m => m.PhonesModule)},
        {path: 'stockage', loadChildren: () => import('./modules/stockage/stockage.module').then(m => m.StockageModule)},
      ],
    },
    {path: 'create-article', component: CreateArticleComponent, canActivate: [CreateArticleGuardGuard]},
    {path: 'gestion', component: GestionComponent, canActivate: [CreateArticleGuardGuard]},
    {path: 'panier', component: PanierComponent},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'update/:uuidArticle', component: UpdateArticleComponent, canActivate: [CreateArticleGuardGuard]},
    {path: 'details/:uuidArticle', component: DetailsArticleComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
