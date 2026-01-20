import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';

import { TextState } from '../models/text-state.model';

@Component({
  selector: 'app-formatters',
  templateUrl: './formatters.component.html',
  styleUrls: ['./formatters.component.css']
})
export class FormattersComponent implements OnChanges {

  @Input() incomingText: string = '';
  @Output() sendToFirst = new EventEmitter<TextState>();

  textState = new TextState();

  @ViewChild('colorPicker') colorPicker!: ElementRef<HTMLInputElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['incomingText']) {
      this.textState.set(this.incomingText);
    }
  }

  emit() {
    this.sendToFirst.emit(this.textState);
  }

  clear() {
    this.textState.clear();
    this.emit();
  }

  reverse() {
    this.textState.reverse();
    this.emit();
  }

  removeSpaces() {
    this.textState.removeSpaces();
    this.emit();
  }

  removeSpecialChars() {
    this.textState.removeSpecialChars();
    this.emit();
  }

  toUpper() {
    this.textState.toUpper();
    this.emit();
  }

  toLower() {
    this.textState.toLower();
    this.emit();
  }

  bold() {
    this.textState.toggleBold();
    this.emit();
  }

  italic() {
    this.textState.toggleItalic();
    this.emit();
  }

  underline() {
    this.textState.toggleUnderline();
    this.emit();
  }

  removeStyling() {
    this.textState.removeStyling();
    this.emit();
  }

  openColorPicker() {
    this.colorPicker.nativeElement.click();
  }

  changeColor(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    this.textState.setColor(color);
    this.emit();
  }
  increaseFont() {
  this.textState.increaseFont();
  this.emit();
}

decreaseFont() {
  this.textState.decreaseFont();
  this.emit();
}

}
