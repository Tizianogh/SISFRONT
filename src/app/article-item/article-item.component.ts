import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from "../models/article";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article | undefined;
  @Output() remove: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() ajout: EventEmitter<Article> = new EventEmitter<Article>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteArticle(): void {
    this.remove.emit(this.article);
  }

  addPanier(article: Article): void {
    this.ajout.emit(article);
  }
}
