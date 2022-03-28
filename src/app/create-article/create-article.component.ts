import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../models/article';
import { Categorie } from '../models/categorie';
import { Marque } from '../models/marque';
import { ArticleService } from '../services/article/article.service';
import { CategorieService } from '../services/categorie/categorie.service';
import { MarqueService } from '../services/marque/marque.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  //@ts-ignore
  private dataSubject = new BehaviorSubject<Article>(null);
  categories: Array<Categorie> = [];
  marques: Array<Marque> = [];

  articleForm!: FormGroup;

  constructor(private categorieService: CategorieService, private marqueService: MarqueService, private _formBuilder: FormBuilder, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleForm = this._formBuilder.group({
      titre: ['', Validators.required],
      libelle: ['', Validators.required],
      prix: ['', Validators.required],
      categorie: ['', Validators.required],
      marque: ['', Validators.required]
    })

    this.categorieService.getCategories$.subscribe(res => {
      this.categories=res;
    })

    this.marqueService.getMarques$.subscribe(res => {
      this.marques=res;
    })
  }

  createArticle(articleForm: FormGroup) : void {
    //@ts-ignore
    let article: Article = {
      titre: articleForm.value.titre,
      libelle: articleForm.value.libelle,
      prix: articleForm.value.prix,
      uuidCategorie: articleForm.value.categorie,
      uuidMarque: articleForm.value.marque
    }

    console.log(articleForm.value)

    this.articleService.createArticle$(article).subscribe(article => { this.dataSubject.next(article);})

  }

}
