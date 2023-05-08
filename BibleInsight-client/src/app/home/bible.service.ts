import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BibleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  searchVerses(text: string, bible: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/api/search?text=${text}&bible=${bible}`
    );
  }

  navigateToChapter(
    bible: string,

    book: string,
    chapter: number
  ): Observable<any> {
    let bookAndChapter = book + chapter;
    return this.http.get(
      `${this.apiUrl}/api/navigate?bible=${bible}&reference=${bookAndChapter}`
    );
  }

  fetchBooks(bible: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/books?bible=${bible}`);
  }
}
