import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Categorie } from 'src/app/models/categorie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private readonly apiUrl = `${environment.APIEndpoint}/categories`


  constructor(private http: HttpClient) { }

  getCategories$ = <Observable<Array<Categorie>>>this.http.get<Array<Categorie>>(`${this.apiUrl}/list`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue`);
  };
}
