import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { MatSliderModule } from '@angular/material/slider';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { MatIconModule } from '@angular/material/icon';
import { ChildComponent } from './child/child.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    MatSliderModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
