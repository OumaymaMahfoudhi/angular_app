import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { UpdatePublicationComponent } from './update-publication/update-publication.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'publication', component: PublicationListComponent},
  {path: 'createPublication', component: CreatePublicationComponent},
  {path: '', redirectTo: 'Loginpage', pathMatch: 'full'},
  {path: 'Loginpage', component: UserLoginComponent},
  {path: 'updatePublication/:id', component: UpdatePublicationComponent},
  {path: 'publicationDetails/:id', component: PublicationDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
