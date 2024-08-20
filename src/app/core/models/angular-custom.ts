export interface INgCustom {
  ngStyle: INgStyle;
  ngClass: NgClassValue;
}
interface NgStyleValue {
  [klass: string]: string | number | undefined;
}
type NgClassValue = string | string[] | { [key: string]: boolean };

export interface INgStyle extends NgStyleValue {
  width?: string;
  height?: string;
  objectFit?: string;
  filter?: string;
}
