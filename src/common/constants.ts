const APP_NAME = 'the budget';
const MIN_PASSWORD_LENGTH = 8;

enum Collections {
  PROFILES = 'profiles',
}

enum Currencies {
  USD = 'USD',
  EUR = 'EUR',
  UAH = 'UAH',
}

enum CurrenciesSigns {
  USD = '$',
  EUR = '€',
  UAH = '₴',
}

export {
  APP_NAME,
  MIN_PASSWORD_LENGTH,
  Collections,
  Currencies,
  CurrenciesSigns,
};
