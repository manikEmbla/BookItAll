import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';

export const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}