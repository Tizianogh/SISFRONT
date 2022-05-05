import {Component, OnInit} from '@angular/core';
import {PanierService} from "../services/pannier/panier.service";
import {ArticleService} from "../services/article/article.service";
import {BehaviorSubject} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  produits: any = [];
  private dataSubject = new BehaviorSubject<any>(null);

  constructor(private articleService: ArticleService, private toastr: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.articleService.getArticles$().subscribe(res => {
      this.produits = res;
    })
  }

  supprimerArticle(article: any) {
    console.log(typeof article.uuidArticle)
    this.articleService.deleteArticle$(article.uuidArticle).subscribe(value => {
      this.toastr.success("Article bien supprimé");
      location.reload()
    }, error => {
      this.toastr.error("Erreur, article non delete")
    })
  }

  modifierArticle(article: any) {
    this.router.navigate([`/update/${article.uuidArticle}`]);
  }
}
