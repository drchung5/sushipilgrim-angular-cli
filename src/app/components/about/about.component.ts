import { Component, OnInit }  from '@angular/core'

@Component({
  selector: 'about',

  moduleId: "module.id",

  templateUrl: './about.component.html',

  styleUrls: ['./about.component.css'],

})
export class AboutComponent implements OnInit{

  constructor() {
    console.log("AboutComponent: constructor()")
  }

  ngOnInit() {
    console.log("AboutComponent: ngOnInit()")
  }

}