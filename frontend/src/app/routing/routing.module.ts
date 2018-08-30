import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PostingComponent } from '../posting/posting.component';
import { LogInComponent } from '../log-in/log-in.component';
import { RegisterComponent } from '../register/register.component';
import { PropertyComponent } from '../property/property.component';
import { CarComponent } from '../car/car.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'posting', component: PostingComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'properties', component: PropertyComponent},
  {path: 'cars', component: CarComponent},
  {path: 'login', component: LogInComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
export const routingComponent = [ HomeComponent, PostingComponent , PropertyComponent , CarComponent,RegisterComponent , LogInComponent]
