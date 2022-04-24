import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {first} from 'rxjs';
import {Utilisateur} from '../models/utilisateur';
import {UtilisateurService} from '../services/utilisateur/utilisateur.service';
import {ToastrService} from "ngx-toastr";
import {ValueConverter} from "@angular/compiler/src/render3/view/template";
import {Router} from "@angular/router";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  messageError: boolean = false;
  utilisateurs: Array<Utilisateur> = [];


  constructor(private utilisateurService: UtilisateurService, private toastr: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
  }

  connexion(connexionForm: any) {
    this.utilisateurs = [];
    let connexion = {
      mail: connexionForm.value.email,
      mdp: connexionForm.value.pass
    }

    this.utilisateurService.login(connexion as Utilisateur).pipe(first()).subscribe(
      res => {
        this.showSucces(res[0].mail);
        this.router.navigate([''])
      }, err => {
        this.showError(err.error);
        connexionForm.resetForm();
      }
    )
  }

  //TODO: Créer un service
  showSucces(value: string) {
    this.toastr.success(`Bienvenue ${value}`)
  }

  showError(reason: string) {
    //@ts-ignore
    this.toastr.error(`Une erreur est survenue : ${reason}`)
  }
}
