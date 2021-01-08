import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit {

  forma: FormGroup;

constructor( private route: ActivatedRoute ) {


this.forma = new FormGroup({
  titulo : new FormControl('', Validators.required ),
  descripcion: new FormControl('', Validators.required),
  estado : new FormControl('', [Validators.required])

});   }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
    console.log(params); });
  }

  // tslint:disable-next-line: typedef
  guardarCambios( ){
  console.log(this.forma.value);
  console.log(this.forma);
  }


  // capturarObjeto(): any{
  //   this.route.params.subscribe( params => {
  //   console.log(params);
  //   });
  //   }

}
