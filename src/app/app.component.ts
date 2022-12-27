import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'administracion';
  ngOnInit() {
  }

  public router: string | undefined;

  constructor(private _router: Router) {
  }


  hasRoute(route: string) {
    return this._router.url.includes(route);
  }
  
}
