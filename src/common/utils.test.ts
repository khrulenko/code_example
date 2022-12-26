import { createUrl, getDateFromISO, isObjEmpty } from './utils';

describe('getDateFromISO', () => {
  const cases = [
    { date: '2022-08-19', expected: 'Aug 19, 2022' },
    { date: '2021-05-16', expected: 'May 16, 2021' },
    { date: '2020-02-29', expected: 'Feb 29, 2020' },
  ];

  test.each(cases)('must turn $date into $expected)', ({ date, expected }) => {
    expect(getDateFromISO(date)).toBe(expected);
  });
});

describe('createUrl', () => {
  const tests = [
    { urls: ['/auth', 'login'], expected: '/auth/login' },
    { urls: ['auth', 'login', 'nested'], expected: 'auth/login/nested' },
  ];

  test.each(tests)('must unite $urls into $expected)', ({ urls, expected }) => {
    expect(createUrl(...urls)).toBe(expected);
  });
});

describe('isObjEmpty', () => {
  test('returns true if an object is empty', () => {
    const emptyObject = {};
    expect(isObjEmpty(emptyObject)).toBe(true);
  });

  test('returns false if an object is not empty', () => {
    const notEmptyObject = { test: 'test' };
    expect(isObjEmpty(notEmptyObject)).toBe(false);
  });
});
