import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";
import {Utilisateur} from "../models/utilisateur";
import {PanierService} from "../services/pannier/panier.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: Utilisateur | undefined;
  nbProduits: number = 0;

  connected: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: UtilisateurService, private panierService: PanierService, private toastr: ToastrService) {
    {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
  }

  ngOnInit(): void {
    this.panierService.getProduits().subscribe(value => {
      //@ts-ignore
      this.nbProduits = value.length;
    })
  }

  logout() {
    this.authenticationService.logout();
    this.toastr.success("Vous vous êtes déconnecté.");
    this.router.navigate(['']);
  }

  isConnected() {
    this.connected = this.authenticationService.isLoggedIn();
    return this.connected;
  }
}
