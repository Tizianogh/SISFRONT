import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComputerRoutingModule} from './computer-routing.module';
import {PcPortableComponent} from './pc-portable/pc-portable.component';
import {PcFixeComponent} from './pc-fixe/pc-fixe.component';
import {PcAccessoireComponent} from './pc-accessoire/pc-accessoire.component';
import {ListArticleComponent} from "../../list-article/list-article.component";
import {ArticleItemComponent} from "../../article-item/article-item.component";


@NgModule({
  declarations: [
    PcPortableComponent,
    PcFixeComponent,
    PcAccessoireComponent, ListArticleComponent,
    ArticleItemComponent

  ],
  exports: [
    ListArticleComponent
  ],
  imports: [
    CommonModule,
    ComputerRoutingModule
  ]
})
export class ComputerModule {
}
