import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelListComponent } from './components/hotel-list/hotel-list.component';

const appRoutes: Routes = [
     
    {
      path: 'hotels',
      component: HotelListComponent
     },
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);