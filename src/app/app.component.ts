import { Component, OnInit } from '@angular/core';
import { of, from, map, tap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // of(2,4,6,8).subscribe(item => console.log(item));

    // from([1,2,3,4,5,6]).subscribe({
    //   next: (item) => console.log('resulting item is...' + item),
    //   error: (err) => console.error(`error occurred ${err}`),
    //   complete: () => console.log('completed')
    // });

    // of('apple', 'banana', 'orange').subscribe({
    //   next: (item) => console.log(`resulting item is ${item}`),
    //   error: (err) => console.error(`error occured ${err}`),
    //   complete: () => console.log('completed')
    // })

    from([2, 4, 5, 8])
      .pipe(
        tap((n) => console.log(n)),
        map((n) => n * 2),
        tap((n) => console.log(n)),
        map((n) => n - 10),
        map((n) => {
          if (n === 0) {
            throw new Error('0 detected');
          }
          return n;
        })
        // take(2) // take makes it so error isn't caught
      )
      .subscribe({
        next: (item) => console.log(`resulting item is ${item}`),
        error: (err) => console.error(`error occurred ${err}`),
        complete: () => console.log('complete'),
      });
  }
  title = 'angular-rxjs-demo';
}
