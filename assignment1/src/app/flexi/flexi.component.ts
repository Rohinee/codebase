import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexi',
  templateUrl: './flexi.component.html',
  styleUrls: ['./flexi.component.scss']
})
export class FlexiComponent implements OnInit {

    configFlexi:any = { 
    "items":[ 
       { 
          "name":"person_name",
          "label":"Person's Name",
          "type":"TextField"
       },
       { 
          "name":"states",
          "label":"Person's state",
          "type":"DropDown",
          "values":[ 
             "Maharashtra",
             "Kerala",
             "Tamil Nadu"
          ]
       }
    ]
 }
 name:any;
 state:any;
 form : any = [];

  constructor() { }

  ngOnInit() {
    this.form = this.configFlexi.items;    
  }
  onSubmit(){
    let data = {'name': this.name,state:this.state}
    console.log(data);

  }

}
