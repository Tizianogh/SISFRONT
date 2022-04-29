import {Component, OnInit} from '@angular/core';
import {PanierService} from "../services/pannier/panier.service";
import {Article} from "../models/article";
import {Commande} from "../models/commande";
import {BehaviorSubject} from "rxjs";
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";
import {Ligne} from "../models/ligne";
//@ts-ignore
import {v4 as uuidv4} from 'uuid';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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


  constructor(private panierService: PanierService, private utilisateurService: UtilisateurService, private router: Router, private toastr: ToastrService) {
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


  onKey(event: any, produit: any) {
    let somme = 0;
    this.produits.forEach((prod: any) => {
      if (produit.uuidArticle = prod.uuidArticle) {
        produit.quantite = event.target.value;
      }
      this.sommetotal = this.panierService.getTotalPrix();
    })
  }


  purchase(listProducts: any[]) {
    if (!this.utilisateurService.isLoggedIn()) {
      this.toastr.error("Vous devez être connecté pour pouvoir terminer votre commande!")
      this.router.navigate(['/connexion'])
      return;
    }
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
        this.toastr.success("Votre pannier a bien été validé!");
        this.router.navigate(['']);
        this.panierService.suppressionComplete();
      }, error => {
        this.showError(error)
      })
    })
  }


  showError(reason: string) {
    //@ts-ignore
    this.toastr.error(`Une erreur est survenue : ${reason}`)
  }
}
