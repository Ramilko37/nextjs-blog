import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderTitle>Twicth</HeaderTitle>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 93px;
  text-align: center;
  color: black;
`;