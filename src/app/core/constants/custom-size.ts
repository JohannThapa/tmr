import { IColorClassMap } from '../models/size.model';

export type sizeClassType = 'full' | 'screen' | 'max' | 'svh' | 'lvh' | 'dvh';
export const halfSizeClasses: IColorClassMap = {
  full: '1/2',
  screen: 'half-screen',
  svh: 'half-svh',
  lvh: 'half-lvh',
  dvh: 'half-dvh',
  max: 'min',
};
