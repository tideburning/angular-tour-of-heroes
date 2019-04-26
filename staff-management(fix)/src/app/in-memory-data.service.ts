import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'A', age: 20, gender: 'Nam' },
      { id: 2, name: 'B', age: 20, gender: 'Nu'  },
      { id: 3, name: 'C', age: 20, gender: 'Nam'   },
      { id: 4, name: 'D', age: 20, gender: 'Nu'  },
      { id: 5, name: 'E', age: 20, gender: 'Nam'  },
      { id: 6, name: 'F', age: 20, gender: 'Nu'  },
      { id: 7, name: 'G', age: 20, gender: 'Nam'  },
      { id: 8, name: 'H', age: 20, gender: 'Nu'  },
      { id: 9, name: 'I', age: 20, gender: 'Nam'  },
      { id: 10, name: 'K', age: 20, gender: 'Nu'  }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
