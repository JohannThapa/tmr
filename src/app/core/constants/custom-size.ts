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

export const DEVICE_SIZE = {
  mobile_max: '767.98px',
  tablet_min: '768px',
  tablet_max: '1023.98px',
  laptop_min: '1024px',
  laptop_max: '1439px',
  desktop_min: '1440px',
  desktop_max: '2559px',
  large_desktop_min: '2560px',
  ultra_wide_min: '3840px',
  eight_k_min: '7680px',
};
