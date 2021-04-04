import styled from "styled-components";

export default function Grid() {
    return (
        <GridContainer>
            <GridCard></GridCard>
            <GridCard></GridCard>
            <GridCard></GridCard>
            <GridCard></GridCard>
            <GridCard></GridCard>
            <GridCard></GridCard>
        </GridContainer>
    )
}


const GridContainer = styled.div`
  display: grid;
  padding: 60px;
  width: calc(100% - (64px * 2));
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(3, 400px);
  grid-gap: 40px;
  margin: 0 auto;
  border: 1px solid red;
`;

const GridCard = styled.div`
  border: 1px solid red;
`;