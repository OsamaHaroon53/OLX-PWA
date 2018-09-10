import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PostingComponent } from '../posting/posting.component';
import { LogInComponent } from '../log-in/log-in.component';
import { RegisterComponent } from '../register/register.component';
import { PostsComponent } from '../posts/posts.component';
import { CarComponent } from '../car/car.component';
import { AuthsGuard } from "../Services/auths.guard";
import { PostComponent } from "../post/post.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'posting',
    component: PostingComponent
    // ,canActivate[AuthsGuard];
  },
  { path: 'register', component: RegisterComponent },
  { path: 'Properties', component: PostsComponent },
  { path: 'Cars', component: PostsComponent },
  { path: 'Books', component: PostsComponent },
  { path: 'Pets', component: PostsComponent },
  { path: 'Electronics', component: PostsComponent },
  { path: 'jobs', component: PostsComponent },
  { path: 'Mobile', component: PostsComponent },
  { path: 'Bikes', component: PostsComponent },
  { path: 'Services', component: PostsComponent },
  { path: 'Furniture', component: PostsComponent },
  { path: 'Fashion', component: PostsComponent },
  { path: 'search', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'login', component: LogInComponent,
  
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
export const routingComponent = [HomeComponent, PostComponent, PostingComponent, PostsComponent, CarComponent, RegisterComponent, LogInComponent]
