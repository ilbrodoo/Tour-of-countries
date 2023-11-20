import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent {
  @Input() country?: Country;

  constructor(private route: ActivatedRoute,
              private countryService: CountryService,
              private location: Location){
  }

  ngOnInit(){
    this.getCountry();
  }

  getCountry(){
    const id = this.route.snapshot.paramMap.get('id');
    this.countryService.getCountry(id).subscribe((country) =>{
      this.country = country[0];
    });
  }

  goBack(){
    this.location.back();
  }
}
