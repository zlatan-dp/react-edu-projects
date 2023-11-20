import { useEffect, useState, useRef, useCallback } from 'react';
import { Block } from './Block';
import './CurrencyConverter.scss';

const myHeaders = new Headers();
myHeaders.append('apikey', 'XSxZRp3H0IjebhS6Nl2thLBDe4Holly0');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

// {USDEUR: 0.915085, USDUAH: 36.013655, USDCNY: 7.172298,  USDUSD: 1, }
//&currencies=EUR%2C%20UAH%2C%20CNY%2C%20USD

function CurrencyConverterApp() {
  const [isLoad, setIsLoad] = useState(false);
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  const ratesRef = useRef({});

  //   const onChangeFromPrice = value => {
  //     const price = value / ratesRef.current['USD' + fromCurrency];
  //     const result = price * ratesRef.current['USD' + toCurrency];
  //     setToPrice(result.toFixed(3));
  //     setFromPrice(value);
  //   };

  //   const onChangeToPrice = value => {
  //     const result =
  //       (ratesRef.current['USD' + fromCurrency] /
  //         ratesRef.current['USD' + toCurrency]) *
  //       value;
  //     setFromPrice(result.toFixed(3));
  //     setToPrice(value);
  //   };

  const onChangeFromPrice = useCallback(
    value => {
      const price = value / ratesRef.current['USD' + fromCurrency];
      const result = price * ratesRef.current['USD' + toCurrency];
      setToPrice(Number(result.toFixed(3)));
      setFromPrice(value);
    },
    [fromCurrency, toCurrency]
  );

  const onChangeToPrice = useCallback(
    value => {
      const result =
        (ratesRef.current['USD' + fromCurrency] /
          ratesRef.current['USD' + toCurrency]) *
        value;
      setFromPrice(Number(result.toFixed(3)));
      setToPrice(value);
    },
    [fromCurrency, toCurrency]
  );

  useEffect(() => {
    async function fetchExchangeRates() {
      try {
        const response = await fetch(
          'https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR%2C%20UAH%2C%20CNY',
          requestOptions
        );
        const json = await response.json();

        ratesRef.current = { ...json.quotes, USDUSD: 1 };
        onChangeToPrice(1);
        setIsLoad(true);
        console.log(json.quotes);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        alert('Не вдалося отримати інформацію');
      }
    }

    if (!isLoad) {
      fetchExchangeRates();
    }
  }, [onChangeToPrice, isLoad]);

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromPrice, fromCurrency, onChangeFromPrice]);

  //   useEffect(() => {
  //     onChangeToPrice(toPrice);
  //   }, [toPrice, toCurrency, onChangeToPrice]);

  return isLoad ? (
    <div className="ConverterApp">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default CurrencyConverterApp;
