import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor( private toastrModule: ToastrService ) {
}

showSuccess(title, mensaje ): void{
this.toastrModule.success(title, mensaje);
}

showWarning(title, mensaje): void{
this.toastrModule.warning(title, mensaje);
  }

  showError(title, mensaje): void{
  this.toastrModule.error(title, mensaje);
    }

// creando notificación para eliminación
confirmBoxDeleted(): void{
  Swal.fire({
    title: 'Estás seguro que deseas borrar esta tarea?',
    text: 'No prodrás revertir esta acción ',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si,deseo borrarla',
    cancelButtonText: ' No borrar'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Borrado !',
        'Esta tarea ha sido borrada corretamente.',
        'Ok'
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelado !',
        'La tarea no ha sido borrada.',
        'Error'
      );
    }
  });
}
}
