import * as Style from './styles';

const Header = () => (
  <Style.HeaderContainer>
    <Style.HeaderWrapper>
      <Style.HeaderContentContainer>
        <Style.HeaderContentItem>
          <Style.TitleLink href="#0">HOME</Style.TitleLink>
        </Style.HeaderContentItem>
        <Style.HeaderContentItem>
          <Style.TitleLink href="#0">ABOUT</Style.TitleLink>
        </Style.HeaderContentItem>
        <Style.HeaderContentItem>
          <Style.TitleLink href="#0">CONTACT</Style.TitleLink>
        </Style.HeaderContentItem>
      </Style.HeaderContentContainer>
    </Style.HeaderWrapper>
  </Style.HeaderContainer>
);

export default Header;
