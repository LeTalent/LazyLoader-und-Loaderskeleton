import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './modules/general/about/about.module';
import { ContactModule } from './modules/general/contact/contact.module';
import { SigninModule } from './modules/general/signin/signin.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UserService } from './modules/general/home/user.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    NgxSkeletonLoaderModule,
    FlexLayoutModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    SigninModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
