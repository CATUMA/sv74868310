import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: 'main', component: MainComponent, canActivate: [AuthGuard],
       children:[
            {path: 'posts', component: PostsComponent},
            {path: 'users', component: UsersComponent}
       ] 
    }
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}