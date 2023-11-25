import { Component } from '@angular/core';
import { FestivosService } from './servicios/festivos.service';
import { FestivoDto } from './entidades/festivo-dto';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ModalFestivoService } from './servicios/modal-festivo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Festivos';

  public fechaSeleccionada: any;
  public annio: number = new Date().getFullYear();
  public columnas = [
    { name: 'Celebración', prop: 'festivo', cellClass: 'celebracion-column' },
    { name: 'Fecha', prop: 'fecha' },
  ];
  public festivos: FestivoDto[] = [];

  public ColumnMode = ColumnMode;
  public SelectionType = SelectionType;
  public festivoSeleccion: FestivoDto | undefined;

  constructor(
    private festivosService: FestivosService,
    private modalService: ModalFestivoService

  ) {
  }

  public validarFecha() {
    let fecha = new Date(this.fechaSeleccionada);
    this.festivosService.verificarFecha(fecha).subscribe(
      respuesta => {
        this.modalService.openModal(respuesta);
      }
    );
  }

  public obtenerFestivos() {
    this.festivosService.obtenerFestivos(this.annio)
      .subscribe(data => {
        this.festivos = data;
      },
        err => {
          this.modalService.openModal(err.message)
        });
  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.festivoSeleccion = event.row;
    }
  }
}
