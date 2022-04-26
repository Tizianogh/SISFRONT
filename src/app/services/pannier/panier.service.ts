import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Article} from "../../models/article";
import {Commande} from 'src/app/models/commande';
import {environment} from "../../../environments/environment";
import {Ligne} from "../../models/ligne";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private readonly apiUrl = `${environment.APIEndpoint}/commandes`

  panierList: any = [];
  // @ts-ignore
  produitList = new BehaviorSubject<Article>([]);

  constructor(private http: HttpClient) {
  }


  purchase$ = (commande: Commande) => <Observable<Commande>>this.http.post<Commande>(`${this.apiUrl}/add`, commande)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  addItemsToOrder$ = (ligne: Ligne) => <Observable<Ligne>>this.http.post<Ligne>(`${this.apiUrl}/contenue/add`, ligne)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue`);
  };


  getProduits() {
    return this.produitList.asObservable();
  }

  setproduit(produit: Article) {
    //@ts-ignore
    this.panierList.push(...produit);
    this.produitList.next(produit);
  }

  ajoutPanier(produit: Article) {
    /*let exist = false;
    for (let i in this.panierList) {
      if (this.panierList[i].uuidArticle === produit.uuidArticle) {
        this.panierList[i].quantite++;
        exist = true;
        break;
      }
    }

    if (!exist) {
      this.panierList.push(produit);
    }

    this.produitList.next(this.panierList);
    this.getTotalPrix();
    console.log(this.panierList) /*
     */
    let foundItem = this.panierList.find((item: any) => item.uuidArticle === produit.uuidArticle);
    if (foundItem) {
      foundItem.quantite++;
      return;
    }

    if (!foundItem) {
      this.panierList.push(produit);
    }

    this.produitList.next(this.panierList)
    this.getTotalPrix();
  }

  getTotalPrix(): number {
    let total = 0;
    this.panierList.map((p: any) => {
      total += p.prix * p.quantite;
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
