import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
