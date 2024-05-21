import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AirdropComponent } from './components/airdrop/airdrop.component';

const routes: Routes = [

  {path: ':language?',      component: HomeComponent},
  {path: 'airdrop',   component: AirdropComponent},
  {path: ':language?/airdrop',   component: AirdropComponent},

  // {path: 'profile'        ,   component: ProfileComponent         , canActivate: [AuthGuard]},
  // {path: 'users'          ,   component: UsersComponent           , canActivate: [AuthGuard]},
  // {path: 'register-user'  ,   component: RegisterUserComponent    , canActivate: [AuthGuard]},

  // {path: '**', pathMatch: 'full', redirectTo: '/'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
