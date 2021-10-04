import "./card.css";


type CardProp = {
  title?: any;
  img: string;
  description: string;
  releaseYear: string;
  
};

export default function Card(props: CardProp) {

  return (
    <div className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <a href="#">
            <img src={props.img} className="poster" />
          </a>
        </div>
        <div className="ticket-container"></div>
      </div>
    </div>
  );
}
