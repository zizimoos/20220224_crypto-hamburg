import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import styled, { keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { apiSearchCoin } from "../api";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Currency, Exchange, Ico, Person, Tag } from "./interface";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.mainBackgroundColor};
  @media (min-width: 1000px) {
    margin: 0 auto;
    width: 900px;
  }
`;
const Header = styled.header`
  margin-top: 0px;
  padding: 20px;
`;
const ToggleBox = styled.div`
  width: 100%;
  height: 50px;
  margin-left: 50px;
  padding-top: 10px;
  justify-content: flex-start;
  font-size: 30px;
`;
const Title = styled.h1``;
const rotata = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;
const IsLoading = styled(AiOutlineLoading3Quarters)`
  height: 100vh;
  justify-self: center;
  animation: ${rotata} 2s linear infinite;
`;
const CoinList = styled.div`
  width: 100%;
`;
const LinkBox = styled(Link)``;
const CoinBox = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.boxLineColor};
  color: ${(props) => props.theme.colors.mainTextColor};
  font-size: 14px;
  &:hover {
    color: #00c198;
  }
  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    div:first-child {
      padding-right: 10px;
    }
  }
`;

const SearchBox = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export interface ISearch {
  currencies: Currency[];
  exchanges: Exchange[];
  icos: Ico[];
  people: Person[];
  tags: Tag[];
}

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, data } = useQuery<ISearch>(
    ["searchCoin", searchTerm],
    () => apiSearchCoin(searchTerm!)
  );

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  console.log(data?.currencies);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  return (
    <>
      <HelmetProvider>
        <Container>
          <Helmet>
            <title>{`Crypto App`}</title>
          </Helmet>
          <SearchBox>
            <div style={{ margin: "10px" }}>SEARCH</div>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Search"
                onChange={onChange}
                value={searchTerm}
              />
            </form>
          </SearchBox>
          <Header>
            <Title>CRYPTO APP</Title>
          </Header>
          <>
            {isLoading ? (
              <IsLoading>
                <AiOutlineLoading3Quarters />
              </IsLoading>
            ) : (
              <CoinList>
                {data?.currencies.map((coin, index) => {
                  return (
                    <div key={index}>
                      <LinkBox
                        to={`/${coin.id}/chart`}
                        state={{ coinName: coin.name }}
                      >
                        <CoinBox>
                          <div>
                            <div>
                              {
                                coin?.rank
                                // <img
                                //   src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                //   alt="coin"
                                //   style={{ width: "20px", height: "20px" }}
                                // />
                              }
                            </div>
                            <div>{coin.name}</div>
                          </div>
                          <div>
                            <div>price</div>
                          </div>
                        </CoinBox>
                      </LinkBox>
                    </div>
                  );
                })}
              </CoinList>
            )}
          </>
        </Container>
      </HelmetProvider>
    </>
  );
}

export default Search;
