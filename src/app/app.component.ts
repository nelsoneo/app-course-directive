import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

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

  persons = [{
    firstName: '', 
    lastName: '', 
    age: 0
  }];

  constructor(private peopleService: PeopleService){}

  ngOnInit() {

    // console.log(this.persons)
    this.getPeople();

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

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.persons = people;
    })
  }
}
