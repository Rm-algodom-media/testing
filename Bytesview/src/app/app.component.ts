import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bytesview';
  count = 0;
  color = 'orange';
  bgColor= 'black';
  update(){
    this.color="white"
    this.bgColor="blue"
  }
  counter(type: string) {
    type == 'add' ? this.count++ : this.count--
  }; 
  data = 10;
//  list:any [] = [];

}

