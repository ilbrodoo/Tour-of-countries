import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Country } from './country';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesUrl: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getCountries(): Observable<Country[]>{
    this.log('fetched countries');
    return this.http.get<Country[]>(`${this.countriesUrl}all`);
  }

  getCountry(id: string | null): Observable<Country[]>{
    this.log(`fetched country id:${id}`);
    return this.http.get<Country[]>(`${this.countriesUrl}alpha/${id}`);
  }

  private log(message: string) {
    this.messageService.add(`CountryService: ${message}`);
  }
}
