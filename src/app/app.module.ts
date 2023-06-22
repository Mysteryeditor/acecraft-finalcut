import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';
import { HomepageComponent } from './homepage/homepage.component';
import { CardModule } from 'primeng/card';
import { FooterComponent } from './footer/footer.component';
import { CollegeComponent } from './college/college.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnterpriseComponent } from './enterprise/enterprise.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    CollegeComponent,
    SigninComponent,
    RegisterComponent,
    EnterpriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    BadgeModule,
    CardModule,
    SidebarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // FormControl,
    // FormGroup
    // Validators
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
