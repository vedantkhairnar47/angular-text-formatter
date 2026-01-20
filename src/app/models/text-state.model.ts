export class TextState {

  /* =====================
     TEXT STATE
  ====================== */
  value: string = '';

  constructor(initialValue: string = '') {
    this.value = initialValue;
  }

  /* =====================
     TEXT OPERATIONS
  ====================== */
  set(value: string) {
    this.value = value;
  }

  clear() {
    this.value = '';
  }

  reverse() {
    this.value = this.value.split('').reverse().join('');
  }

  removeSpaces() {
    this.value = this.value.replace(/\s+/g, '');
  }

  removeSpecialChars() {
    this.value = this.value.replace(/[^a-zA-Z0-9 ]/g, '');
  }

  toUpper() {
    this.value = this.value.toUpperCase();
  }

  toLower() {
    this.value = this.value.toLowerCase();
  }

  /* =====================
     FORMATTING STATE
  ====================== */
  isBold = false;
  isItalic = false;
  isUnderline = false;

  fontSize = 15;
  color = '#000000';

  /* =====================
     FORMATTING ACTIONS
  ====================== */
  toggleBold() {
    this.isBold = !this.isBold;
  }

  toggleItalic() {
    this.isItalic = !this.isItalic;
  }

  toggleUnderline() {
    this.isUnderline = !this.isUnderline;
  }

  increaseFont() {
    this.fontSize += 1;
  }

  decreaseFont() {
    if (this.fontSize > 10) {
      this.fontSize -= 1;
    }
  }

  setColor(color: string) {
    this.color = color;
  }

  removeStyling() {
    this.isBold = false;
    this.isItalic = false;
    this.isUnderline = false;
    this.fontSize = 15;
    this.color = '#000000';
  }

  /* =====================
     COUNTS
  ====================== */
  get wordCount(): number {
    return this.value.trim()
      ? this.value.trim().split(/\s+/).length
      : 0;
  }

  get charCount(): number {
    return this.value.length;
  }

  
}
