import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 40px;
  font-size: 20px;
`;

export const HeaderWrapper = styled.nav`
  color: red;
  background-color: #b1bae8;
  height: 40px;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

export const HeaderContentContainer = styled.ul`
  margin: 0px 10px;
  padding: 8px;
  display: flex;
`;

export const HeaderContentItem = styled.li`
  color: red;
  height: 40px;
  width: 30%;
  paddding: 20px;
  font-size: 20px;
  list-style: none
`;

export const TitleLink = styled.a`
  margin-top: 8px;
  line-height: 18px;
  color: black;
  text-decoration: none;
`;
