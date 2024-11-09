import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ExportarDatosComponent } from './app/exportar-datos/exportar-datos.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: ExportarDatosComponent }
    ])
  ]
}).catch(err => console.error(err));
