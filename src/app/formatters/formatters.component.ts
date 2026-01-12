import { Component,Input,Output,ViewChild,EventEmitter , ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-formatters',
  templateUrl: './formatters.component.html',
  styleUrls: ['./formatters.component.css']
})
export class FormattersComponent implements AfterViewInit {
  @Input() incomingText: string = '';

  textValue: string = '';

  get charCount(): number {
    return this.incomingText.length;
  }

  get wordCount(): number {
    if (!this.incomingText.trim()) {
      return 0;
    }
    return this.incomingText.trim().split(/\s+/).length;
  }

  @Output() sendToFirst = new EventEmitter<string>();

  @Output() boldAll = new EventEmitter<void>();
  @Output() UnderLine = new EventEmitter<void>();
  @Output() Italic = new EventEmitter<void>();
  @Output() IncCase = new EventEmitter<void>();
  @Output() LowCase = new EventEmitter<void>();
@Output() colorSelected = new EventEmitter<string>();
@Output() removeStyle = new EventEmitter<void>();

removeStyling() {
  this.removeStyle.emit();
}



@ViewChild('colorPicker', { static: false })
colorPicker!: ElementRef<HTMLInputElement>;
ngAfterViewInit(): void {
  // view is ready
}
  openColorPicker() {
    if (this.colorPicker) {
      this.colorPicker.nativeElement.click();
    }
  }
onColorChange(event: Event) {
  const input = event.target as HTMLInputElement;
  this.colorSelected.emit(input.value);
}
selectColor(color: string) {
  this.colorSelected.emit(color);
}

  makeBold() {
    this.boldAll.emit();  
  }
   makeUnderLine() {
    this.UnderLine.emit();  
  }
    makeItalic() {
    this.Italic.emit();  
  }
  makeUpperCase() {
    this.IncCase.emit();  
  }
   makeLowerCase() {
    this.LowCase.emit();  
  }
 
  ClearValue() {
    this.sendToFirst.emit("");
  }
  removeAllSpaces() {
    const cleaned = this.incomingText.replace(/\s+/g, '');
  this.sendToFirst.emit(cleaned);
  }
  reverseText() {
  const reversed = this.incomingText.split('').reverse().join('');
  this.sendToFirst.emit(reversed);

  
}
  removeSpecialCharacters() {
  const cleaned = this.incomingText.replace(/[^a-zA-Z0-9 ]/g, '');
  this.sendToFirst.emit(cleaned);
}

capitalizeAllLetter() {
 const result = this.incomingText.toUpperCase();
  this.sendToFirst.emit(result);
}
}