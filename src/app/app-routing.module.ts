import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/HomeComponent';
import { DashBoardComponent } from './components/DashBoardComponent';
import { ProductConfigComponent } from './components/ProductConfigComponent';
import { UserAccountsComponent } from './components/UserAccountsComponent';
import { LogComponent } from './components/LogComponent';
import { MoreComponent } from './components/MoreComponent';
import { DirectAccessGuard } from './services/DirectAccessGuard';

const  routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',
   component: HomeComponent},
  { path: 'dashboard',
   component: DashBoardComponent,
   canActivate:[DirectAccessGuard]
   },
  { path: 'product', component: ProductConfigComponent },
  { path: 'user', component: UserAccountsComponent },
  { path: 'log', component: LogComponent },
  { path: 'more', component: MoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
