import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Article} from "../../models/article";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panierList: any = [];
  // @ts-ignore
  produitList = new BehaviorSubject<Article>([]);

  constructor(private http: HttpClient) {
  }

  getProduits() {
    return this.produitList.asObservable();
  }

  setproduit(produit: Article) {
    //@ts-ignore
    this.panierList.push(...produit);
    this.produitList.next(produit);
  }

  ajoutPanier(produit: Article) {
    this.panierList.push(produit);
    this.produitList.next(this.panierList);
    this.getTotalPrix();
    console.log(this.panierList)
  }

  getTotalPrix(): number {
    let total = 0;
    this.panierList.map((p: any) => {
      total += p.prix;
    })
    return total;
  }

  suppressionArticlePanier(produit: Article) {
    this.panierList.map((prod: any, indice: any) => {
      if (produit.uuidArticle === prod.uuidArticle) {
        this.panierList.splice(indice, 1);
      }
    })
    this.produitList.next(this.panierList);
  }

  suppressionComplete() {
    this.panierList = [];
    this.produitList.next(this.panierList);
  }
}
