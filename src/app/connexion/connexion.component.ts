import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  messageError: boolean = false;
  utilisateurs: Array<Utilisateur> = [];


  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
  }

  connexion(connexionForm: any) {
    this.utilisateurs=[];
    let connexion = {
      mail: connexionForm.value.email,
      mdp: connexionForm.value.pass
    }

   /* this.utilisateurService.login$(connexion as Utilisateur).subscribe( res => {
      this.utilisateurs=res;
      if(this.utilisateurs.length==0){
        console.log("Utilisateur non trouvé")
      }else {
        localStorage.setItem('currentUser', JSON.stringify(this.utilisateurs));
      }  
    }); */

    this.utilisateurService.login(connexion as Utilisateur).pipe(first()).subscribe(
      res => {
        console.log("from CONNEXION")
          console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }
}
