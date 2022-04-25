import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {Article} from '../models/article';
import {Categorie} from '../models/categorie';
import {Marque} from '../models/marque';
import {ArticleService} from '../services/article/article.service';
import {CategorieService} from '../services/categorie/categorie.service';
import {MarqueService} from '../services/marque/marque.service';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

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
  submitted = false;

  articleForm!: FormGroup;

  constructor(private router: Router, private categorieService: CategorieService, private marqueService: MarqueService, private _formBuilder: FormBuilder, private articleService: ArticleService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.articleForm = this._formBuilder.group({
      titre: ['', [Validators.required, Validators.required, Validators.minLength(5)]],
      libelle: ['', [Validators.required, Validators.required, Validators.minLength(5)]],
      prix: ['', [Validators.required, Validators.min(1)]],
      image: ['', [Validators.required, Validators.minLength(5)]],
      categorie: ['', Validators.required],
      marque: ['', Validators.required]
    })

    this.categorieService.getCategories$.subscribe(res => {
      this.categories = res;
    })

    this.marqueService.getMarques$.subscribe(res => {
      this.marques = res;
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.articleForm.invalid) {
      return;
    }

    //@ts-ignore
    let article: Article = {
      titre: this.articleForm.value.titre,
      libelle: this.articleForm.value.libelle,
      prix: this.articleForm.value.prix,
      uuidCategorie: this.articleForm.value.categorie,
      uuidMarque: this.articleForm.value.marque,
      urlImage: this.articleForm.value.image
    }

    this.articleService.createArticle$(article).subscribe(article => {
      this.dataSubject.next(article);
      this.showSucces();
      this.router.navigate(['/pc-fixe'])
    }, error => (this.showError()));
  }

  get f() {
    return this.articleForm.controls;
  }

  showSucces() {
    this.toastr.success("L'article a bien été créé.")
  }

  showError() {
    this.toastr.error("Une erreur est survenue.")
  }

  onReset() {
    this.submitted = false;
    this.articleForm.reset();
  }
}
