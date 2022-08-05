import { Component } from '@angular/core';
import {product} from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formulario1';


  person = {
    name: 'Alix',
    age: 25,
    avatar: 'https://images.unsplash.com/photo-1603686872523-f72035397760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
  }

  register ={
  name:'',
  apellido:'',
  email:'',
  password:'',
}

onRegister(){
  console.log(this.register);
}

changeName(event: Event){
  const element = event.target as HTMLInputElement;
  this.person.name = element.value;
}


}
