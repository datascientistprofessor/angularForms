import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelDrivenFormsComponent } from './ModelDrivenForms/model-driven-forms/model-driven-forms.component';
import { TemplateDrivenFormsComponent } from './TemplateDrivenForms/template-driven-forms/template-driven-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelDrivenFormsComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
