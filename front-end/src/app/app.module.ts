import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HelloWorldComponent} from './hello-world/helloworld.component';
import {ChampionsComponent} from './champions/champions.component';
import {MasteriesComponent} from './masteries/masteries.component';
import {ChampionsService} from './champions/champions.service';
import {MasteriesService} from './masteries/masteries.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatGridListModule, MatListModule, MatToolbarModule, MatDialogModule, MatSnackBarModule, MatTooltipModule} from '@angular/material';
import {MasteryComponent} from './masteries/mastery/mastery.component';
import {Alert} from './alert/alert';
import {ConfirmDialogComponent} from './confirm-dialog-component/confirm-dialog.component';

@NgModule({
  // komponenty
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ChampionsComponent,
    MasteriesComponent,
    MasteryComponent,
    ConfirmDialogComponent
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
    },
    {
      path: 'masteries',
      component: MasteriesComponent
    }
  ]),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  // serwisy
  providers: [
    ChampionsService,
    MasteriesService,
    Alert
  ],
  entryComponents: [MasteryComponent, ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
