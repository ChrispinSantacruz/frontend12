import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'create', component: CreateComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: EditComponent }, // Con parámetro de ruta 'id' para el contenido a editar
  { path: 'delete/:id', component: DeleteComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full' }, // Redirecciona al componente 'create' si la ruta está vacía
  { path: '**', redirectTo: '/create' },
  { path: '', component: HomeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
