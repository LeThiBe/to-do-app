import React, {Component} from "react"

import * as Style from './styles';

import Header from '../../components/layout/header/Header';

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Style.MainContainer>
          <Style.TitleContent>This is home page</Style.TitleContent>
        </Style.MainContainer>
      </>
    );
  }
}

export default HomePage;
