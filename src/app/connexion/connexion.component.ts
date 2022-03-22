import { Component, OnInit } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  messageError:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }
  
connexion(connexionForm: any){
  let data = connexionForm.value;
  console.log(connexionForm.value)
}
}
