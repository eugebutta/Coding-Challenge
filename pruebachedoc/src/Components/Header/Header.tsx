import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { themes } from "../../App";
import styled from "styled-components";
import { mdiThemeLightDark } from "@mdi/js";
import Icon from "@mdi/react";
import { THEME } from "../../Redux/constants";

export default function Header() {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  const msjType = useSelector((state: any) => state.msjTyp);

  const Title = styled.p`
    color: ${themes[theme].color};
    font-size: 100%;
    padding: 0%
    margin: 0
  `;
  const SubTitle = styled.div`
    color: ${themes[theme].color};
    font-size: 100%;
    padding: 0%
    margin: 0
  `;
  const Page = styled.div`
    background-color: ${themes[theme].pageBackground};
    &:focus {
      outline: none;
  }
  transition: .4s;
  `;

  const changeTheme = () => {
    if (theme === "light") {
      return dispatch({ type: THEME, payload: "dark" });
    } else dispatch({ type: THEME, payload: "light" });
  };

  return (
    <Page>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to={"/Home"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Title> Challenge Chedoc </Title>
              </Link>
            </Typography>
            <div className="icon" onClick={() => changeTheme()}>
              <Icon
                path={mdiThemeLightDark}
                title="User Profile"
                size={1}
                horizontal
                vertical
                rotate={90}
                color={theme === "light" ? "black" : "white"}
                spin
                 
              />
            </div>
            <Button color="inherit"><Title> Login </Title></Button>
          </Toolbar>
        </AppBar>
        <div className="conteinerSubBar">
        <SubTitle>{msjType == "Home" && "All your favorites movies and series are here"} </SubTitle>
        <SubTitle>  {msjType == "Movie" && "Popular Movies"}</SubTitle>
        <SubTitle>  {msjType == "Series" && "Popular Series"}</SubTitle>
        </div>
      </Box>
    </Page>
  );
}
