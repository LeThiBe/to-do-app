import React, { useState, useEffect } from 'react';

import * as Style from './styles';

import Header from '../../components/layout/header/Header';

const Contact = () => {
  const renderResult = (number) => {
     debugger;
    return `0${number}`.slice(-2);
  }

  const [number, setNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNumber(number + 1);
    }, 1000)
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
