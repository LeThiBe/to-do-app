import * as Style from './styles';


const HeaderForm = () => (
  <Style.HeaderContainer>
    <Style.HeaderWrapper>
      <Style.HeaderContentContainer>
        <Style.HeaderContentItem>
          {/* <Link to="/home">>HOME</Link> */}
          <Style.TitleLink href="#0">HOME</Style.TitleLink>
        </Style.HeaderContentItem>
        <Style.HeaderContentItem>
          {/* <Link to="/about">ABOUT</Link> */}
          <Style.TitleLink href="#0">ABOUT</Style.TitleLink>
        </Style.HeaderContentItem>
        <Style.HeaderContentItem>
          {/* <Link to="/contact">CONTACT</Link> */}
          <Style.TitleLink href="#0">CONTACT</Style.TitleLink>
        </Style.HeaderContentItem>
      </Style.HeaderContentContainer>
    </Style.HeaderWrapper>
  </Style.HeaderContainer>
);

export default HeaderForm;
