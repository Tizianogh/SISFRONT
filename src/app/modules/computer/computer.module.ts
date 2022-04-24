import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComputerRoutingModule} from './computer-routing.module';
import {PcPortableComponent} from './pc-portable/pc-portable.component';
import {PcFixeComponent} from './pc-fixe/pc-fixe.component';
import {AccessoiresPcComponent} from './accessoires-pc/accessoires-pc.component';
import {ListArticleComponent} from "../../list-article/list-article.component";
import {ArticleItemComponent} from "../../article-item/article-item.component";


@NgModule({
  declarations: [
    PcPortableComponent,
    PcFixeComponent,
    AccessoiresPcComponent, ListArticleComponent,
    ArticleItemComponent

  ],
  imports: [
    CommonModule,
    ComputerRoutingModule
  ]
})
export class ComputerModule {
}
