import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article/article.service";
import {PanierService} from "../services/pannier/panier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  listArticle: Article[] | undefined;

  constructor(private router: Router, private articleService: ArticleService, private panierService: PanierService) {
  }

  ngOnInit(): void {
    this.articleService.getArticleByCategory$(this.router.url.substring(1)).subscribe(res => {
      this.listArticle = res;

      this.listArticle.forEach(value => {
        Object.assign(value, {quantite: 1})
      })
    })
  }

  ajoutArticlePannier(produit: Article) {
    this.panierService.ajoutPanier(produit);
  }
}
