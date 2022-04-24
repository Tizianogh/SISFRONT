import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";
import {Utilisateur} from "../models/utilisateur";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: Utilisateur | undefined;

  constructor(
    private router: Router,
    private authenticationService: UtilisateurService) {
    {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
  }

  ngOnInit(): void {
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
