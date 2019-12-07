import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokeService } from './poke.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
