import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Style from './styles';

import Header from '../../components/layout/header/Header';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState((state, props) => ({
      point: state.point + props.number
    }));
  }

  decrease() {
    this.setState((state, props) => ({
      point: state.point - props.number
    }));
  }

  render() {
    const { point: count} = this.state;
    return (
      <>
        <Header />
        <Style.MainContainer>
          <Style.TitleContent>This is about page</Style.TitleContent>
          <Style.ButtonIncrease onClick={this.decrease}>-</Style.ButtonIncrease>
          <Style.NumberPoint>Point is {count} </Style.NumberPoint>
          <Style.ButtonIncrease onClick={this.increase}>+</Style.ButtonIncrease>
        </Style.MainContainer>
      </>
    );
  }
}

About.propTypes = {
  number: PropTypes.number,
}

export default About;
