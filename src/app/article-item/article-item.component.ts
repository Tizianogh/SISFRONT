import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from "../models/article";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article | undefined;
  @Output() remove: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() ajout: EventEmitter<Article> = new EventEmitter<Article>();

  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  deleteArticle(): void {
    this.remove.emit(this.article);
  }

  addPanier(article: Article): void {
    this.toastr.success(`Article ${article.titre} ajouté au panier.`, '',{positionClass: 'toast-bottom-left', closeButton: true});
    this.ajout.emit(article);
  }
}
