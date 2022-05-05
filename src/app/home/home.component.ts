import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateurService.isLoggedIn();
  }

}
