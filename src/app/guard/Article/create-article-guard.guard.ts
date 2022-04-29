import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";
import {Utilisateur} from "../../models/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class CreateArticleGuardGuard implements CanActivate {
  roles: any [];

  constructor(private utilisateurService: UtilisateurService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.utilisateurService.isLoggedIn()) {
      console.log(this.utilisateurService.currentUserRole)
      if (this.utilisateurService.currentUserRole == "ADMIN") {
        return true;
      } else {
        alert("Vous n'êtes pas admin pour accéder à cette section")
        return false;
      }
    } else {
      alert("Vous n'êtes pas connecté pour accéder à cette section")
      return false;
    }
  }
}
