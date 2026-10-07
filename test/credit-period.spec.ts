import { describe, expect, it } from 'vitest';
import { addCreditMonths, getCreditPeriod } from '../src/credit/credit-period.js';

describe('monthly credit calendar', () => {
  it('resets on the anniversary and preserves its time', () => {
    const anchor = new Date('2026-06-25T09:15:00Z');
    expect(addCreditMonths(anchor, 1).toISOString()).toBe('2026-07-25T09:15:00.000Z');
    expect(getCreditPeriod(anchor, new Date('2026-07-25T09:14:59Z'))?.start).toEqual(anchor);
    expect(getCreditPeriod(anchor, new Date('2026-07-25T09:15:00Z'))?.start.toISOString())
      .toBe('2026-07-25T09:15:00.000Z');
  });

  it('returns to the original day after a shorter month', () => {
    const anchor = new Date('2026-01-31T12:00:00Z');
    expect(addCreditMonths(anchor, 1).toISOString()).toBe('2026-02-28T12:00:00.000Z');
    expect(addCreditMonths(anchor, 2).toISOString()).toBe('2026-03-31T12:00:00.000Z');
  });

  it('handles leap years and year boundaries', () => {
    expect(addCreditMonths(new Date('2024-01-31T12:00:00Z'), 1).toISOString())
      .toBe('2024-02-29T12:00:00.000Z');
    expect(addCreditMonths(new Date('2026-12-25T12:00:00Z'), 1).toISOString())
      .toBe('2027-01-25T12:00:00.000Z');
  });

  it('selects the current period after missed months', () => {
    const anchor = new Date('2026-01-31T12:00:00Z');
    const period = getCreditPeriod(anchor, new Date('2026-05-10T12:00:00Z'));
    expect(period?.start.toISOString()).toBe('2026-04-30T12:00:00.000Z');
    expect(period?.end.toISOString()).toBe('2026-05-31T12:00:00.000Z');
    expect(getCreditPeriod(anchor, new Date('2026-01-30T12:00:00Z'))).toBeNull();
  });
});
