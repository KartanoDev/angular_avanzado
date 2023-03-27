import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map, Subscription, Observable } from 'rxjs';

@Component( {
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [ './breadcrumbs.component.css' ]
} )
export class BreadcrumbsComponent implements OnInit, OnDestroy
{
  public titulo: string = '';

  public tituloSubs$: Subscription;

  constructor ( private router: Router )
  {
    this.tituloSubs$ = this.getDataRoute().subscribe( ( titulo ) =>
    {
      this.titulo = titulo;
      document.title = `AdminPro - ${ titulo }`;
    } );
  }
  ngOnDestroy(): void
  {
    this.tituloSubs$.unsubscribe();
  }
  ngOnInit(): void
  {
  }

  getDataRoute(): Observable<string>
  {
    return this.router.events
      .pipe(
        filter( ( evento: any ) =>
        {
          return ( evento instanceof ActivationEnd && evento.snapshot.firstChild === null )
        } ),
        map( ( evento: ActivationEnd ) =>
        {
          return evento.snapshot.data[ 'titulo' ];
        } )
      )
  }

}
