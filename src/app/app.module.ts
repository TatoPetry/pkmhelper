import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlipCoinComponent } from './coponents/flip-coin/flip-coin.component';
import { ButtonsComponent } from './coponents/buttons/buttons.component';
import { DamageComponent } from './coponents/damage/damage.component';

@NgModule({
  declarations: [
    AppComponent,
    FlipCoinComponent,
    ButtonsComponent,
    DamageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
