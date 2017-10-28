import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/helloworld.component';
import { DbmanagementComponent } from './dbmanagement/dbmanagement.component';
import { DbmanagementService } from './dbmanagement/dbmanagement.service';

@NgModule({
  declarations: [
    AppComponent,
    DbmanagementComponent,
    HelloWorldComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/helloworld',
        pathMatch: 'full'
      },
      {
        path: 'dbmanagement',
        component: DbmanagementComponent
      },
      {
        path: 'helloworld',
        component: HelloWorldComponent
      }
    ]),
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    DbmanagementService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
