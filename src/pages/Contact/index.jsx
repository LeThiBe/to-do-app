import React, { useState, useEffect } from 'react';

import * as Style from './styles';

import Header from '../../components/layout/header/Header';

const Contact = () => {
  const renderResult = (number) => {
    return `0${number}`.slice(-2);
  }

  const [number, setNumber] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNumber(number + 1);
    }, 1000)

    return () => clearTimeout(timer);
  }, [number]);

  return (
    <>
      <Header />
      <Style.MainContainer>
        <Style.TitleContent>This is contact page</Style.TitleContent>
        <Style.TitleNumber>Number is:</Style.TitleNumber>
        <Style.ContentNumber>{renderResult(number)}</Style.ContentNumber>
      </Style.MainContainer>
    </>
  )
};

export default Contact;
