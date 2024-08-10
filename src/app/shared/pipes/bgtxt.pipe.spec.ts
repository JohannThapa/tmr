import { BgtxtPipe } from './bgtxt.pipe';

describe('BgtxtPipe', () => {
  let pipe: BgtxtPipe;

  beforeEach(() => {
    pipe = new BgtxtPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return #ffffff for a red color #cc0022', () => {
    const result = pipe.transform('#cc0022');
    expect(result).toBe('#ffffff');
  });

  it('should return #000000 for a light color #f0e68c', () => {
    const result = pipe.transform('#f0e68c');
    expect(result).toBe('#000000');
  });

  it('should return #000000 for a light color #ffffff', () => {
    const result = pipe.transform('#ffffff');
    expect(result).toBe('#000000');
  });

  it('should return #ffffff for a dark color #000000', () => {
    const result = pipe.transform('#000000');
    expect(result).toBe('#ffffff');
  });
});
