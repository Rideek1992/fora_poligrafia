import { Component, OnInit } from '@angular/core';
import { ServicePageInterface } from '../../../../core/models/service-page-interface';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { LoaderPage } from '../../../../shared/components/loader-page/loader-page';
import { FormSection } from '../../../../shared/components/form-section/form-section';
import { enviroment } from '../../../../../enviroment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonLink } from '../../../../shared/components/button-link/button-link';
import { MiniHeroPage } from '../../../../shared/components/mini-hero-page/mini-hero-page';
import { FQASection } from '../../../../core/models/FQA-section-interface';
import { FqaSection } from '../../../../shared/components/fqa-section/fqa-section';

@Component({
  selector: 'app-contact-page',
  imports: [
    HeroPage,
    LoaderPage,
    FormSection,
    FormsModule,
    CommonModule,
    ButtonLink,
    MiniHeroPage,
    FqaSection,
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage implements OnInit {
  data: ServicePageInterface | null | undefined = null;
  dataFQA: FQASection | null | undefined = null;
  isActive: boolean = false;
  public env = enviroment;

  serchCity = '';
  filteredCities: { name: string }[] = [];
  selectedCity: string = '';
  areaMessage: string = '';
  showSuggestions: boolean = false;

  activeLookNumber: number = 0;

  constructor(private api: ApiBackendCMSService) {}

  normalizeText(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  onSerchCity(): void {
    const normalizedInput = this.normalizeText(this.serchCity);

    if (!normalizedInput) {
      this.filteredCities = [];
      this.areaMessage = '';
      this.showSuggestions = false;
      return;
    }

    this.filteredCities = this.env.contactData.area.city.filter((city) => {
      return this.normalizeText(city.name).includes(normalizedInput);
    });

    this.showSuggestions = true;

    if (this.filteredCities.length === 0) {
      this.areaMessage =
        'Nie widzisz swojej miejscowości? \n Skontaktuj się z nami — wiele realizacji' +
        ' prowadzimy również zdalnie.';
    } else {
      this.areaMessage = '';
    }
  }
  selectCity(city: { name: string }): void {
    this.serchCity = city.name;
    this.selectedCity = city.name;
    this.filteredCities = [];
    this.showSuggestions = false;
    this.areaMessage =
      'Tak, działamy w tym obszarze. Skontaktuj się z nami, aby omówić szczegóły współpracy.';
  }

  changeLookNumber(index: number): void {
    this.activeLookNumber = index;
  }

  ngOnInit(): void {
    this.api.getPageData('kontakt').subscribe({
      next: (data) => {
        this.data = data;
        this.isActive = true;
      },
      error: (err) => {
        console.log(err);
        this.isActive = false;
      },
    });

    this.api.getFQAData('kontakt').subscribe({
      next: (data) => {
        this.dataFQA = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
