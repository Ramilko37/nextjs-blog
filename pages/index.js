import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Grid from "../components/Grid/Grid";
const GlobalStyle = createGlobalStyle`
 
 h1 {
   font-size: 4rem;
 }
`;
const Container = styled.div`
  text-align: center;
`;
export default function Home() {
  return (
      <>
        <Head>
          <title>SSR styled-components with Next.js Starter</title>
        </Head>
        <Container>
          <GlobalStyle />
              <Header/>
              <Search/>
              <Grid/>
        </Container>
      </>
  );
}