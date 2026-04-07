import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuDesctop } from './layout/menu-desctop/menu-desctop';
import { Footer } from './layout/footer/footer';
import { SeoService } from './seo/seo-service';
import { filter, map } from 'rxjs';
import { SeoInterface } from './core/models/seo-interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuDesctop, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('web');

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private serviceSeo: SeoService,
  ) {}

  ngOnInit() {
    this.route.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activeRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        map((route) => route.snapshot.data['seo'] as SeoInterface | undefined),
      )
      .subscribe((seo) => {
        if (seo) {
          this.serviceSeo.updateSeo(seo);
        }
      });
  }
}
