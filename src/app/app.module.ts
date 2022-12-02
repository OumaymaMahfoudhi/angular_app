import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule} from '@angular/common/http';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { UpdatePublicationComponent } from './update-publication/update-publication.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CreatePublicationComponent,
    UpdatePublicationComponent,
    PublicationListComponent,
    PublicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent, UserLoginComponent],
  
})
export class AppModule { }
