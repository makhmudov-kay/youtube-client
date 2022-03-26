import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { AuthComponent } from './auth/auth.component';
import { ContentComponent } from './content/content.component';
import { CardItemComponent } from './content/card-item/card-item.component';
import { CardItemPageComponent } from './content/card-item-page/card-item-page.component';
import { SortComponent } from './sort/sort.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { StatisticComponent } from './content/statistic/statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent,
    AuthComponent,
    ContentComponent,
    CardItemComponent,
    CardItemPageComponent,
    SortComponent,
    SearchResultComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
