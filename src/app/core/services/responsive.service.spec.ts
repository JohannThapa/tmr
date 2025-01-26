import { TestBed } from '@angular/core/testing';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { of } from 'rxjs';

import { ResponsiveService } from './responsive.service';

describe('ResponsiveService', () => {
  let service: ResponsiveService;
  let breakpointObserverSpy: jasmine.SpyObj<BreakpointObserver>;

  beforeEach(() => {
    breakpointObserverSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);

    TestBed.configureTestingModule({
      providers: [ResponsiveService, { provide: BreakpointObserver, useValue: breakpointObserverSpy }],
    });

    service = TestBed.inject(ResponsiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return isTablet$ correctly', () => {
    const isTablet = true;
    const mockBreakpointState: BreakpointState = {
      matches: isTablet,
      breakpoints: {},
    };
    breakpointObserverSpy.observe.and.returnValue(of(mockBreakpointState));

    service.isTablet$.subscribe((result) => {
      expect(result).toBe(isTablet);
    });
  });

  it('should return isMobile$ correctly', () => {
    const isMobile = true;
    const mockBreakpointState: BreakpointState = {
      matches: isMobile,
      breakpoints: {},
    };
    breakpointObserverSpy.observe.and.returnValue(of(mockBreakpointState));

    service.isMobile$.subscribe((result) => {
      expect(result).toBe(isMobile);
    });
  });

  it('should return isDesktop$ correctly', () => {
    const isDesktop = true;
    const mockBreakpointState: BreakpointState = {
      matches: isDesktop,
      breakpoints: {},
    };
    breakpointObserverSpy.observe.and.returnValue(of(mockBreakpointState));

    service.isDesktop$.subscribe((result) => {
      expect(result).toBe(isDesktop);
    });
  });
});
