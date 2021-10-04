import { useEffect } from "react";
import "./Home.css";
import { Text } from "react-font";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MSJ_TYP } from "../../Redux/constants";
import LogoStarWar from "../LogoStarWar/LogoStarWar";
import styled from "styled-components";
import { themes } from "../../App";

export default function Home(props: any) {


  
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);



  const Page = styled.div`
    background-color: ${themes[theme].pageBackground};
    transition: background-color 0.5s;
  `;



  useEffect(() => {
    dispatch({ type: MSJ_TYP, payload: "Home" });
  }, [dispatch, theme]);



  return (
    <Page>
      <div className="conteinerHome">
        <div className="conteinerCard">
          <Link
            to={"/Movies"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="cardHome">
              <LogoStarWar />

              <Text family="Death Star" className="text">
                MOVIES
              </Text>
            </div>
          </Link>
          <Link
            to={"/Series"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="cardHome">
              <LogoStarWar />
              <Text family="Death Star" className="text">
                SERIES
              </Text>
            </div>
          </Link>
        </div>
      </div>
    </Page>
  );
}
