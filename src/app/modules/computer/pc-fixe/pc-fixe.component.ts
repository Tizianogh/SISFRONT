import {Component, OnInit} from '@angular/core';
import {Article} from 'src/app/models/article';
import {ArticleService} from 'src/app/services/article/article.service';
import {UtilisateurService} from 'src/app/services/utilisateur/utilisateur.service';
import {PanierService} from "../../../services/pannier/panier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pc-fixe',
  templateUrl: './pc-fixe.component.html',
  styleUrls: ['./pc-fixe.component.css']
})
export class PcFixeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }
}
