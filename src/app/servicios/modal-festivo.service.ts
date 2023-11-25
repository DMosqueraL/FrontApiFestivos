import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalFestivoComponent } from '../modal-festivo/modal-festivo.component';

@Injectable({
  providedIn: 'root'
})
export class ModalFestivoService {

  constructor(private ventana: MatDialog) { }

  openModal(message: string): void {
    this.ventana.open(ModalFestivoComponent, {
      width: '500px',
      data: { message },
    });
  }
}
