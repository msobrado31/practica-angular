

import { Component, OnInit } from '@angular/core';
import {  NgForm  } from '@angular/forms';

import { Person } from './../../interfaces/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  do: String = "insert"
  position: any = 0

  contacts: Array<Person> = []

  public contact: Person = {
        name: "",
        surnames: "",
        age: "",
        dni: "",
        birthday: "",
        favouriteColour: "",
        sex: ""        
  }





  ngOnInit(): void { 
  }
  

  add( form : NgForm ){               //añadir


    if( this.do === 'insert' ){       //si la acción vale insertar

      let birthDate  = new Date(this.contact.birthday);
      let day = birthDate.getDay();
      let month = birthDate.getMonth();
      let year = birthDate.getFullYear();
      let ageNum = parseInt(this.contact.age)
      
      this.contact.birthday = `${day}/${month}/${year}`

    
      

      if(ageNum > 0 && ageNum <= 125){     //validar edad
      this.contacts.push( this.contact )
      }
      
      this.contact={                       //reset introducir contacto vacío
        name:"",
        surnames:"",
        age:"",
        dni:"",
        birthday:new Date(),
        favouriteColour:"",
        sex:""
      }
   

    }else{
      this.contacts[ this.position ] = this.contact  //si no vale insertar actualiza
      this.do = 'insert'                             //inserta el contacto guardado en la lista de contactos
    }

    form.resetForm()
  }

  

  delete( delPosition : number )    : void {      //borrar
    this.contacts.splice( delPosition , 1 )       //indicamos posición y cantidad
  }


  update( upPosition : number ) : void {          //actualizar
    this.contact  = this.contacts[ upPosition ];  //coger contacto que en la lista de contactos tiene posición actualizar
    this.do   = 'update'
    this.position = upPosition
  }
}


