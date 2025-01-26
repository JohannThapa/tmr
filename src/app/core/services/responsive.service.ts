import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { DEVICE_SIZE } from '../constants/custom-size';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  get isTablet$(): Observable<boolean> {
    return this.breakpointObserver
      .observe(`(min-width: ${DEVICE_SIZE.tablet_min}) and (max-width: ${DEVICE_SIZE.tablet_max})`)
      .pipe(map((result: BreakpointState) => result.matches));
  }
  get isMobile$(): Observable<boolean> {
    return this.breakpointObserver
      .observe([`(max-width: ${DEVICE_SIZE.mobile_max})`])
      .pipe(map((result: BreakpointState) => result.matches));
  }

  // TODO: Use from constants
  get isDesktop$(): Observable<boolean> {
    return this.breakpointObserver
      .observe([`(min-width: 1200px)`])
      .pipe(map((result: BreakpointState) => result.matches));
  }
}
