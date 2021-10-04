import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/card";
import Spinner from "../Spinner";
import "./Movie.css";
import { MSJ_TYP } from "../../Redux/constants";
import Modal from "../Modal/Modal";
import { MODAL } from "../../Redux/constants";
import { themes } from "../../App";
import styled from "styled-components";

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const showAllMoviesSeries = useSelector((state: any) => state.showAll);
  const dispatch = useDispatch();
  const modalState = useSelector((state: any) => state.showModal);
  const theme = useSelector((state: any) => state.theme);
  

  const movies = showAllMoviesSeries?.entries
    .filter((x: any) => x.programType == "movie")
    .filter((x: any) => x.releaseYear >= "2010")
    .slice(0, 20);

  useEffect(() => {
    setLoading(true);
    dispatch({ type: MSJ_TYP, payload: "Movie" });
    setTimeout(function () {
      setLoading(false);
    }, 3000);
  }, [dispatch]);


  const clickModal = movies.filter((x: any) => x.title == modalState.data);

  const setModal = (e: any, key: string) => {
    e.preventDefault();
    dispatch({ type: MODAL, payload: true, data: key });
    /* dispatch({type: MODAL , asd: props.title}) */
  };
  /*  const PopUpEx = () => (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>
  );
   */
 movies.sort(function(a:any, b:any){
    let dateA = a.title.toLowerCase();
    let dateB = b.title.toLowerCase();
    if (dateA < dateB) 
    {
      return -1;
    }    
    else if (dateA > dateB)
    {
      return 1;
    }   
    return 0;
  });



  const Page = styled.div`
  background-color: ${themes[theme].pageBackground};
  transition: all .5s ease;
      `;

  return (
    <Page>
    <div className="cards">
      {!loading &&
        movies &&
        movies?.map((a: any) => (
          <div onClick={(e) => setModal(e, a.title)}>
            <Card
              title={a.title}
              img={a.images["Poster Art"].url}
              description={a.description}
              releaseYear={a.releaseYear}
            />
          </div>
        ))}
      {!movies && !loading && (
        <div style={{ marginBottom: "33%" }}>Oops something went wrong!</div>
      )}
      {modalState.state && (
        <Modal
          title={clickModal[0].title}
          img={clickModal[0].images["Poster Art"].url}
          description={clickModal[0].description}
          releaseYear={clickModal[0].releaseYear}
        />
      )}
      <div className="spinner">{loading && <Spinner />}</div>
    </div>
    </Page>

  );
}
