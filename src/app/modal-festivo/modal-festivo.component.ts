import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: `
    <h2>{{ data.message }}</h2>
    <button mat-button [mat-dialog-close]="true" class="modal-button">Cerrar</button>
  `,
})
export class ModalFestivoComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}

}
