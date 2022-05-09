import { Component, OnInit } from '@angular/core';
import {
  of,
  from,
  map,
  tap,
  take,
  fromEvent,
  interval,
  combineAll,
  combineLatest,
  timer,
} from 'rxjs';

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
    //   from([2, 4, 5, 8])
    //     .pipe(
    //       tap((n) => console.log(n)),
    //       map((n) => n * 2),
    //       tap((n) => console.log(n)),
    //       map((n) => n - 10),
    //       map((n) => {
    //         if (n === 0) {
    //           throw new Error('0 detected');
    //         }
    //         return n;
    //       })
    //       // take(2) // take makes it so error isn't caught
    //     )
    //     // this is example of passing observer object to the subscribe method
    //     // .subscribe({
    //     //   next: (item) => console.log(`resulting item is ${item}`),
    //     //   error: (err) => console.error(`error occurred ${err}`),
    //     //   complete: () => console.log('complete'),
    //     // });
    //     // can also just pass a function that acts as the next method
    //     .subscribe(nums => console.log(nums));
  }
  title = 'angular-rxjs-demo';

  examplesFromPluralsight(): void {
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
        // this is example of passing observer object to the subscribe method
        // .subscribe({
        //   next: (item) => console.log(`resulting item is ${item}`),
        //   error: (err) => console.error(`error occurred ${err}`),
        //   complete: () => console.log('complete'),
        // });
        // can also just pass a function that acts as the next method
        .subscribe(nums => console.log(nums));
  }

  mapExample(): void {
    console.log('Map Example**************************');
    const nums = [1, 2, 3, 4];
    const nums$ = from(nums);

    const numbersMultipliedByTen$ = nums$
      .pipe(map((num) => num * 10))
      .subscribe((n) => console.log(n));
  }

  combineLatestExample(): void {
    console.log('Combine All Example**************************');

    const firstTimer = timer(0, 1000).pipe(take(5)); // emit 0, 1, 2... after every second, starting from now
    const secondTimer = timer(500, 1000).pipe(take(5)); // emit 0, 1, 2... after every second, starting 0,5s from now
    const combinedTimers = combineLatest([firstTimer, secondTimer]);
    combinedTimers.subscribe((value) => console.log(value));
    // Logs
    // [0, 0] after 0.5s
    // [1, 0] after 1s
    // [1, 1] after 1.5s
    // [2, 1] after 2s
  }
}
