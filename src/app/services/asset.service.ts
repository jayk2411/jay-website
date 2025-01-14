import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(private http: HttpClient) {}

  preloadImage(url: string): Observable<boolean> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
} 