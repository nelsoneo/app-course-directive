import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor() {}

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Nelson',
        lastName: 'Hernandez',
        age: 35,
      },
      {
        firstName: 'Daniel',
        lastName: 'Hernandez',
        age: 9,
      },
      {
        firstName: 'Bernyz',
        lastName: 'Hernandez',
        age: 34,
      },
      {
        firstName: 'Arlete',
        lastName: 'Lermen',
        age: 42,
      },
    ];

    return of(peopleArray);
  }
}
