import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';

const appRoutes: Routes = [
     
    {
      path: 'hotels',
      component: HotelListComponent
     },
    {
      path: "",
      redirectTo:'/hotels',
      pathMatch: 'full'
     },
     {
      path: 'hotel-details',
      component: HotelDetailsComponent
     }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);