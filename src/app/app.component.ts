import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-lab';
  myVar: boolean = true;
  count:number = 0;

  presidents: string[]= ["Higgins","McAleese","Robinson","Hillery"];
  president: any[] =
  [{name: "Higgins", term:"2011-"},
  {name: "McAleese", term:"1997-2011"},
  {name: "Robinson", term:"1990-1997"},
  {name: "Hillery", term:"1976-1990"},
  {name: "O Dalaigh", term:"1974-1976"}];

  onClick(){
    this.count++;
  }

  onDoubleClick() {
    if(this.myVar === false) {
      this.myVar = true;
    }
    else {
      this.myVar = false;
    }

  }
}
