import {Component, OnInit} from '@angular/core';
import {Article} from 'src/app/models/article';
import {ArticleService} from 'src/app/services/article/article.service';
import {UtilisateurService} from 'src/app/services/utilisateur/utilisateur.service';
import {PanierService} from "../../../services/pannier/panier.service";

@Component({
  selector: 'app-pc-fixe',
  templateUrl: './pc-fixe.component.html',
  styleUrls: ['./pc-fixe.component.css']
})
export class PcFixeComponent implements OnInit {
  photos: Array<string> = ["assets/images/PcFixe/p1.jpg", "assets/images/PcFixe/p2.jpg", "assets/images/PcFixe/p3.jpg"]

  articles: Array<Article> = [];

  constructor(private articleService: ArticleService, private utilisateurService: UtilisateurService, private panierService: PanierService) {
  }

  ngOnInit(): void {
    this.articleService.getArticleByCategory$("Fixe").subscribe(res => {
      this.articles = res;
      this.articles.map(value => value.photo = this.randomImage())
      this.articles.forEach(value => {
        Object.assign(value, {quantité: 1, prix: value.prix})
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
