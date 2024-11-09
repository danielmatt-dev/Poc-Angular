import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Necesario para [(ngModel)]

// PrimeNG Módulos
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { AppComponent } from './app.component';
import { ExportarDatosComponent } from './exportar-datos/exportar-datos.component';


@NgModule({
  declarations: [
    AppComponent,
    ExportarDatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Para usar [(ngModel)]
    RadioButtonModule, // Importar RadioButtonModule
    ButtonModule, // Importar ButtonModule
    RippleModule, // Importar RippleModule para pRipple
    CardModule // Importar CardModule para tarjetas
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
