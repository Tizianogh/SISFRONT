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
  photos: Array<string> = ["assets/images/PcFixe/p1.jpg", "assets/images/PcFixe/p2.jpg", "assets/images/PcFixe/p3.jpg"]

  constructor(private router: Router, private articleService: ArticleService, private panierService: PanierService) {
  }

  ngOnInit(): void {
    this.articleService.getArticleByCategory$(this.router.url.substring(1)).subscribe(res => {
      this.listArticle = res;
      this.listArticle.map(value => value.photo = this.randomImage())
      this.listArticle.forEach(value => {
        Object.assign(value, {quantite: 1, prix: value.prix})
      })
    })
  }

  ajoutArticlePannier(produit: Article) {
    this.panierService.ajoutPanier(produit);
  }

  randomImage() {
    return this.photos[Math.floor(Math.random() * this.photos.length)];
  }
}
