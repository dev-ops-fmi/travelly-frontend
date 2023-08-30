import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripListItemComponent } from './trip-list-item/trip-list-item.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration/registration.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import { EditTripDialogComponent } from './edit-trip-dialog/edit-trip-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';
import { ItemListComponent } from './item-list/item-list.component';
import { DeleteTripDialogComponent } from './delete-trip-dialog/delete-trip-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TripListComponent,
    TripListItemComponent,
    TripDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    MapComponent,
    ItemListComponent,
    DeleteTripDialogComponent,
    EditTripDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
