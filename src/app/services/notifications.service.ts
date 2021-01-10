import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor( private toastrModule: ToastrService ) {
}

showSuccess(title, mensaje): void{
this.toastrModule.success('title', 'mensaje', {timeOut: 2000});
}

showWarning(title, mensaje): void{
this.toastrModule.warning('title', 'mensaje',  {timeOut: 2000});
  }

  showError(title, mensaje): void{
  this.toastrModule.error('title', 'mensaje' ,  {timeOut: 2000});
    }

}
