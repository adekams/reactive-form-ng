import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Origin {
  error: boolean;
  msg: string;
  data: Country[];
}

export interface Country {
  name: string;
  capital: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://restcountries.eu/rest/v2/all';
  constructor(private http: HttpClient) {}

  public getCountries() {
    return this.http.get<Country[]>(this.url);
  }
}
