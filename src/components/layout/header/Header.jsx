import { BrowserRouter as Router, Link } from 'react-router-dom';

import * as Style from './styles';

const Header = () => (
  <Style.HeaderContainer>
    <Style.HeaderWrapper>
      <Style.HeaderContentContainer>
        <Style.HeaderContentItem>
          <Link to="/">HOME</Link>
        </Style.HeaderContentItem>
        <Style.HeaderContentItem>
            <Link to="/about">About</Link>
        </Style.HeaderContentItem>
        <Style.HeaderContentItem>
          <Link to="/contact">Contact</Link>
        </Style.HeaderContentItem>
      </Style.HeaderContentContainer>
    </Style.HeaderWrapper>
  </Style.HeaderContainer>
);

export default Header;
