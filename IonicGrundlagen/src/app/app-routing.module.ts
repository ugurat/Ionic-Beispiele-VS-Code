import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


// EINTRAGEN
import { HomeComponent } from './home/home.component'; 
import { InfoComponent } from './info/info.component'; 
import { MsgComponent } from './msg/msg.component'; // MsgComponent importieren


const routes: Routes = [

  // EINTRAGEN
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'msg/:id', component: MsgComponent }, // Route für MsgComponent mit ID

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

/*
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
*/


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
