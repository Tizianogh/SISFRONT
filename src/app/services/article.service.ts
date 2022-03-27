import { Injectable } from '@angular/core';
import {environment} from "../../../src/environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Article } from '../models/article';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly apiUrl = `${environment.APIEndpoint}/articles`

  constructor(private http: HttpClient) { }

  getArticleByCategory$ = (category: String) => <Observable<Array<Article>>>this.http.get<Array<Article>>(`${this.apiUrl}/${category}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue`);
  };
}
