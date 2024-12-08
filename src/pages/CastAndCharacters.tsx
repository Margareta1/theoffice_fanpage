import { CastAndCharacters } from "../assets";
import { Image } from "antd";
import "../styles/CastAndCharacters.scss";

export const CastAndCharactersPage = () => {
  return (
    <div className="card-container">
      {CastAndCharacters.cast_and_characters.map((x) => (
        <div className="card">
          <p className="h2">{x.character}</p>
          <p>Played by {x.actor}</p>
          <p>{x.role_description}</p>
          <Image src={x.image_source} alt="img" className="cast-img" />
          <blockquote className="quote">
            <p>{x.quote}</p>
            <cite> - {x.character}</cite>
          </blockquote>
        </div>
      ))}
    </div>
  );
};
