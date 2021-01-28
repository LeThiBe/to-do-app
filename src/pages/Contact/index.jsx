import React, { useState, useEffect } from 'react';

import * as Style from './styles';

import Header from '../../components/layout/header/Header';

const Contact = () => {
  const twoDigit = (input) => {
    var twodigit = input >= 10 ? input : "0"+ input.toString();

    return twodigit;
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
        <Style.ContentNumber>{twoDigit(number)}</Style.ContentNumber>
      </Style.MainContainer>
    </>
  )
};

export default Contact;
