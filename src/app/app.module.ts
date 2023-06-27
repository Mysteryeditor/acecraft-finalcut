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
import { TimelineModule } from 'primeng/timeline';
import { FooterComponent } from './footer/footer.component';
import { CollegeComponent } from './college/college.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { NotesComponent } from './notes/notes.component';
import { AirenMaskComponent } from './airen-mask/airen-mask.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { SchoolComponent } from './school/school.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowseComponent } from './browse/browse.component';
import { ListComponent } from './browse/list/list.component';
import { SettingsSidebarComponent } from './settings-sidebar/settings-sidebar.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    CollegeComponent,
    SigninComponent,
    RegisterComponent,
    EnterpriseComponent,
    NotesComponent,
    AirenMaskComponent,
    SidebarComponent,
    SchoolComponent,
    BrowseComponent,
    ListComponent,
    SettingsSidebarComponent,
    ProductComponent
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
    TimelineModule,
    SidebarModule,
    ButtonModule,
    HttpClientModule
    
    // FormControl,
    // FormGroup
    // Validators
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
