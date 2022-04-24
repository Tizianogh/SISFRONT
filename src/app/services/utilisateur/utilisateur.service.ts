import {query} from '@angular/animations';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, tap, throwError} from 'rxjs';
import {Utilisateur} from 'src/app/models/utilisateur';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private readonly apiUrl = `${environment.APIEndpoint}/users`
  isLoggedin: boolean = false;
  private currentUserSubject: BehaviorSubject<Utilisateur>;
  public currentUser: Observable<Utilisateur>;


  constructor(private http: HttpClient) {
    //@ts-ignore
    this.currentUserSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(utilisateur: Utilisateur) {
    return this.http.post<any>(`${this.apiUrl}/login`, utilisateur)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        // @ts-ignore
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    //@ts-ignore
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): Utilisateur {
    return this.currentUserSubject.value;
  }

  public isLoggedIn() {
    //@ts-ignore
    if (typeof this.currentUserValue !== 'undefined' && this.currentUserValue !== null) {
      this.isLoggedin = true;
      return this.isLoggedin;
    } else {
      this.isLoggedin = false
      return this.isLoggedin;
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue`);
  };
}

