import {Component, OnInit} from '@angular/core';
import {PanierService} from "../services/pannier/panier.service";
import {Article} from "../models/article";
import {Commande} from "../models/commande";
import {BehaviorSubject} from "rxjs";
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";
import {Ligne} from "../models/ligne";
//@ts-ignore
import {v4 as uuidv4} from 'uuid';

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

  private dataSubject = new BehaviorSubject<any>(null);


  constructor(private panierService: PanierService, private utilisateurService: UtilisateurService) {
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


  onKey(event: any,produit:any) {
    let somme = 0;
    this.produits.forEach((prod: any) => {
      if(produit.uuidArticle=prod.uuidArticle){
        produit.quantite = event.target.value;
      }
      this.sommetotal=this.panierService.getTotalPrix();
    })
  }


  purchase(listProducts: any[]) {
    //@ts-ignore
    let order: Commande = {
      uuidCommande: uuidv4(),
      //@ts-ignore
      uuidUtilisateur: this.utilisateurService.currentUserValue[0].uuidUtilisateur,
      prix: this.sommetotal,
      dateCommande: new Date(),
    }

    this.panierService.purchase$(order).subscribe(value => {
      //@ts-ignore
      let ligne: Ligne = {
        uuidCommande: value.uuidCommande,
        contenue: listProducts,
      }
      this.dataSubject.next(value);

      this.panierService.addItemsToOrder$(ligne).subscribe(value1 => {
        this.dataSubject.next(value1);
      })
    })
  }
}
