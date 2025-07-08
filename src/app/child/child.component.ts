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
