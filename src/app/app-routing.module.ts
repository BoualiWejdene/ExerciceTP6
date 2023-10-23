import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ListlivresComponent } from './components/listlivres/listlivres.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ErrorComponent } from './components/error/error.component';
import { SelectedLivreComponent } from './components/selected-livre/selected-livre.component';

const routes: Routes = [
  {path:'presentation',title:'Présentation',component:PresentationComponent},
  {path:'livres',title:'Liste des livres',component:ListlivresComponent},
  {path:'livres/:identif',title:'Livre',component:SelectedLivreComponent},
  {path:'aboutus',title:'about us',component:AboutusComponent},
  {path:'',redirectTo:'presentation',pathMatch:'full'},
  {path:'**',title:'erreur',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
