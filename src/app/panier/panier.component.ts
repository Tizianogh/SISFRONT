import {Component, OnInit} from '@angular/core';
import {PanierService} from "../services/pannier/panier.service";
import {Article} from "../models/article";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  // @ts-ignore
  produits: any = [];
  sommetotal: number = 0
  values = '';

  //@ts-ignore

  constructor(private panierService: PanierService) {
  }

  ngOnInit(): void {
    this.panierService.getProduits().subscribe(res => {
      this.produits = res;
      this.sommetotal = this.panierService.getTotalPrix();
    })
  }

  supprimerArticle(article: Article) {
    this.panierService.suppressionArticlePanier(article);
  }

  suppressionCompleteArticle() {
    this.panierService.suppressionComplete();
  }


  onKey(event: any) { // without type info
    this.sommetotal = this.panierService.getTotalPrix() * event.target.value;
  }
}
