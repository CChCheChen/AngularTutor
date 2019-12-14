import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoOneComponent } from './demo-one/demo-one.component';
import { CookCheckComponent } from './cook-check/cook-check.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoOneComponent,
    CookCheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
