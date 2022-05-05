import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    of(2,4,6,8).subscribe(item => console.log(item));

    from([1,2,3,4,5,6]).subscribe({
      next: (item) => console.log('resulting item is...' + item),
      error: (err) => console.error(`error occurred ${err}`),
      complete: () => console.log('completed')
    });

    of('apple', 'banana', 'orange').subscribe({
      next: (item) => console.log(`resulting item is ${item}`),
      error: (err) => console.error(`error occured ${err}`),
      complete: () => console.log('completed')
    })
  }
  title = 'angular-rxjs-demo';
}
