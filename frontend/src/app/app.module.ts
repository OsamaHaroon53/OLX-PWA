import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule , routingComponent } from './routing/routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoryComponent } from './category/category.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavbarComponent,
    FooterComponent,
    SearchBarComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
