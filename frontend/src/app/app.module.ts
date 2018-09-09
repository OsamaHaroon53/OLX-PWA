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
import { PostsComponent } from './posts/posts.component';
import { AuthService } from "./Services/auth.service";
import { AuthsGuard } from "./Services/auths.guard";





@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavbarComponent,
    FooterComponent,
    SearchBarComponent,
    CategoryComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [HttpServicesService,AuthService,AuthsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
