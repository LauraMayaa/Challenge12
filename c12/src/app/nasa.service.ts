import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NasaImage } from './nasa.model';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable<NasaImage> {
    return this.http.get<NasaImage>("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  }
}
