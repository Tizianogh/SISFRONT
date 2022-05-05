import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../services/article/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {

  articles: any[];

  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.router.url.split("/")[2])
    this.articleService.getArticleByUuid$(this.router.url.split("/")[2]).subscribe(value => {
      this.articles = value;
    })
  }

}
