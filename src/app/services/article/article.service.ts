import {Injectable} from '@angular/core';
import {environment} from "../../../../src/environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from 'rxjs';
import {Article} from '../../models/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly apiUrl = `${environment.APIEndpoint}/articles`

  constructor(private http: HttpClient) {
  }

  getArticleByCategory$ = (category: String) => <Observable<Array<Article>>>this.http.get<Array<Article>>(`${this.apiUrl}/${category}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  getArticleByUuid$ = (uuidArticle: String) => <Observable<Array<Article>>>this.http.get<Array<Article>>(`${this.apiUrl}/list/${uuidArticle}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  getArticles$ = () => <Observable<Array<Article>>>this.http.get<Array<Article>>(`${this.apiUrl}/list`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  deleteArticle$ = (uuidArticle: string) => <Observable<any>>this.http.delete(`${this.apiUrl}/delete/${uuidArticle}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  createArticle$ = (article: Article) => <Observable<Article>>this.http.post<Article>(`${this.apiUrl}/add`, article)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  updateArticle = (article: Article, uuidArticle: string) => <Observable<Article>>this.http.put<Article>(`${this.apiUrl}/update/${uuidArticle}`, article)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue`);
  };
}
