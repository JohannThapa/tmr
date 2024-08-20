import { TAILWIND_HEIGHT_CLASSES, TAILWIND_WIDTH_CLASSES } from '../constants/tailwind';

type SizeValueType =
  | `${number}px`
  | `${number}rem`
  | `${number}%`
  | (typeof TAILWIND_WIDTH_CLASSES)[number]
  | (typeof TAILWIND_HEIGHT_CLASSES)[number]
  | 'auto';

export type { SizeValueType };
