import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FoodFactsDetailsPage} from "./pages/food-facts-details/food-facts-details.page";
import {TabsPage} from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'food-facts',
    pathMatch: 'full',
  },
  {
    path: 'food-facts',
    loadChildren: () => import('./pages/food-facts/food-facts.module').then(m => m.FoodFactsPageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./pages/food-facts-details/food-facts-details.module').then(m => m.FoodFactsDetailsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
