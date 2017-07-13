import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

// import {Ng2Highcharts, Ng2Highstocks} from 'ng2-highcharts';
import { Ng2HighchartsModule } from 'ng2-highcharts';

import { AppRoutingModule } from './app.route';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';
import { StatComponent } from './component/stat/stat.component';
import { ModulesComponent } from './component/modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    StatComponent,
    HomeComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2HighchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
