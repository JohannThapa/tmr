export interface ISingleCard {
  style: ISingleCardStyle;
  title: string;
}
export interface ISingleCardStyle {
  container: ISize;
  image: ISingleCardImage;
}
export interface IDualCardStyle {
  container: ISize;
  image: ISize;
}
export interface ISingleCardImage {
  container: ISize;
  icon: ISize;
}

export interface ISize {
  height: string;
  width: string;
}
