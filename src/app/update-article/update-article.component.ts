import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Article} from "../models/article";
import {Categorie} from "../models/categorie";
import {Marque} from "../models/marque";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategorieService} from "../services/categorie/categorie.service";
import {MarqueService} from "../services/marque/marque.service";
import {ArticleService} from "../services/article/article.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  //@ts-ignore
  private dataSubject = new BehaviorSubject<Article>(null);
  categories: Array<Categorie> = [];
  marques: Array<Marque> = [];
  submitted = false;

  articleForm!: FormGroup;

  articles: any[];
  param: string;

  constructor(private route: ActivatedRoute, private router: Router, private categorieService: CategorieService, private marqueService: MarqueService, private _formBuilder: FormBuilder, private articleService: ArticleService, private toastr: ToastrService) {
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


    this.articleService.getArticleByUuid$(this.router.url.split("/")[2]).subscribe(value => {
      this.articleForm.get('titre').setValue(value[0].titre)
      this.articleForm.get('libelle').setValue(value[0].libelle)
      this.articleForm.get('prix').setValue(value[0].prix)
      this.articleForm.get('image').setValue(value[0].urlImage)
    })
    //@ts-ignore

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

    this.articleService.updateArticle(article, this.router.url.split("/")[2]).subscribe(article => {
      this.dataSubject.next(article);
      this.showSucces();
      this.onReset()
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
