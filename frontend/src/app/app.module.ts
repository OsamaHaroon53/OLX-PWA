import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'; 

import { AppComponent } from './app.component';
import { RoutingModule , routingComponent } from './routing/routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoryComponent } from './category/category.component';

import { HttpServicesService } from "./Services/http-services.service";




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
    FormsModule,
    HttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [HttpServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
