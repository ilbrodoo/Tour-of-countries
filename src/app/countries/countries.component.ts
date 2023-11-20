import { Component } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService){}

  getCountries(): void{
    this.countryService.getCountries()
                  .subscribe(cs => this.countries = cs);
  }

  ngOnInit(): void {
    this.getCountries();
  }
}
