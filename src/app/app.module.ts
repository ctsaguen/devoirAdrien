import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

import { RestserviceService } from './service/restservice.service';
import { NotificationService } from './service/notification.service';

import { BigvaluePipe } from './bigvalue.pipe';
import { TimerPipe } from './pipe/timer.pipe';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    BigvaluePipe,
    ModalComponent,
    TimerPipe,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [RestserviceService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
