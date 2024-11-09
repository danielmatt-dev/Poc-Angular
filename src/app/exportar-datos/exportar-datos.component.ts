import { Component } from '@angular/core';

@Component({
  selector: 'app-exportar-datos',
  templateUrl: './exportar-datos.component.html',
  styleUrls: ['./exportar-datos.component.css']
})

export class ExportarDatosComponent {
  registros = [
    { nombre: 'Registro 1' },
    { nombre: 'Registro 2' },
    { nombre: 'Registro 3' }
  ];

  formatos = [
    { nombre: 'PDF' },
    { nombre: 'Excel' },
    { nombre: 'CSV' }
  ];

  periodos = [
    { nombre: 'Diario', valor: 'diario' },
    { nombre: 'Semanal', valor: 'semanal' },
    { nombre: 'Mensual', valor: 'mensual' }
  ];

  registroAExportarSeleccionado: any;
  formatoAExportarSeleccionado: any;
  periodoAExportarSeleccionado: any;
}
