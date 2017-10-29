import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HelloWorldComponent} from "./hello-world/helloworld.component";
import {ChampionsComponent} from "./champions/champions.component";
import {ChampionsService} from "./champions/champions.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  // komponenty
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ChampionsComponent
  ],
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/helloworld',
      pathMatch: 'full'
    },
    {
      path: 'helloworld',
      component: HelloWorldComponent
    },
    {
      path: 'champions',
      component: ChampionsComponent
    }
  ]),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  // serwisy
  providers: [ChampionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
