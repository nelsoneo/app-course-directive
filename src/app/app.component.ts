import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-course-directive';
  
  count = 0;

  name = "Nelson Hernandez Guerra";

  textValue = '';

  persons = [
    {
      name: "Nelson",
      last: "Hernandez"
    },
    {
      name: "Daniel",
      last: "Hernandez"
    },
    {
      name: "Bernys",
      last: "Hernandez"
    },
    {
      name: "Humbert",
      last: "Hernandez"
    },
  ];

  constructor(){}

  ngOnInit() {

    // console.log(this.persons)

    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)
  }

   testClick(name: string): void {
    console.log('Click on', name);
  }
}
