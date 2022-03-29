import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article/article.service';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-pc-fixe',
  templateUrl: './pc-fixe.component.html',
  styleUrls: ['./pc-fixe.component.css']
})
export class PcFixeComponent implements OnInit {

  articles: Array<Article> = [];

  constructor(private articleService: ArticleService, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.articleService.getArticleByCategory$("Fixe").subscribe(res => {
      this.articles = res;
    })

    console.log(this.utilisateurService.currentUserValue)
  }
}
