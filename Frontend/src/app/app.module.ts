import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { WishComponent } from './wish/wish.component';
import { PreviewComponent } from './preview/preview.component';
import { PreviewallComponent } from './previewall/previewall.component';
import { WishService } from './wish.service';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WishComponent,
    PreviewComponent,
    PreviewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
