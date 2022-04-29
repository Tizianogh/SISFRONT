import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurService.isLoggedIn();
  }

}
