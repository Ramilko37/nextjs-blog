import styled from "styled-components";

export default function Search() {
    return (
        <SearchContainer>
            <SearchParagraph>Введите название видеоролика</SearchParagraph>
            <SearchInput type="text" placeholder={'введите текст'}/>
            <SearchBtn>Найти</SearchBtn>
        </SearchContainer>

    )
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  justify-content: center;
`;

const SearchParagraph = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  margin: 50px 10px 50px 50px;
  height: fit-content;
  width: fit-content;
`;

const SearchBtn = styled.button`
  width: 150px;
  height: 35px;
  border: black;
  margin: 50px 0 0 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
`;

const SearchInput = styled.input`
  width: 500px;
  margin: 50px 0 50px;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
`;


