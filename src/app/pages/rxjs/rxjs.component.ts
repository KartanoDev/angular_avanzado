import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component( {
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: [ './rxjs.component.css' ],
} )
export class RxjsComponent implements OnDestroy
{
  public intervalSubs: Subscription;

  constructor ()
  {
    // this.retornaObservable()
    //   .pipe(retry())
    //   .subscribe(
    //     (valor) => console.log('Subs:', valor),
    //     (err: any) => console.warn('Error: ', err),
    //     () => console.log('Observer completado')
    //   );

    this.intervalSubs = this.retornaIntevalo()
      .subscribe(
        ( valor ) => console.log( valor ) );
  }
  ngOnDestroy(): void
  {
    this.intervalSubs.unsubscribe();
  }

  retornaIntevalo(): Observable<number>
  {
    return interval( 500 )
      .pipe(
        // take( 10 ),
        map( valor => valor + 1 ),
        filter( valor => valor % 2 === 0 ),

      )
  }

  retornaObservable(): Observable<number>
  {
    let i = 0;
    return new Observable<number>( ( observer ) =>
    {
      const intervalo = setInterval( () =>
      {
        i++;
        observer.next( i );
        if ( i === 4 )
        {
          clearInterval( intervalo );
          observer.complete();
        }
        if ( i === 2 )
        {
          observer.error( 'Esto es un error' );
        }
      }, 1000 );
    } );
  }
}
