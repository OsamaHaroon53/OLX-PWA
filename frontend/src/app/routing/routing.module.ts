import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PostingComponent } from '../posting/posting.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'posting', component: PostingComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
export const routingComponent = [ HomeComponent, PostingComponent]
