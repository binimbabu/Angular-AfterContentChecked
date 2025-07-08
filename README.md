ngAfterContentChecked


ngAfterContentChecked is a lifecycle hook in Angular that is called after every check of the content projected into the component.

It is triggered after ngAfterContentInit().

It runs every time change detection runs, so be careful: it’s called often!

app.component.html

<input type="text" [(ngModel)]="message" />
<app-child>
  <p #para>{{ message }}</p>
</app-child>



app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  message: any = '';
}


child.component.ts

import {
  AfterContentChecked,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements AfterContentChecked {
  @ContentChild('para') p!: ElementRef;
  ngAfterContentChecked() {
    var currentText = this.p.nativeElement.textContent.trim() || '';
    console.log(currentText);
  }
}


child.component.html

<div>
  <ng-content></ng-content>
</div>




