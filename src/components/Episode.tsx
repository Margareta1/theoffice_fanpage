import { EpisodeType } from "../types/types";
import "../styles/Episode.scss";
import { Image } from "antd";

interface EpisodeProps {
  episode: EpisodeType;
}

export const Episode: React.FC<EpisodeProps> = ({ episode }) => {
  return (
    <div>
      <div className="season-episode-div">
        <p>
          <span>Season: </span>
          {episode.season}
        </p>
        {episode.episode && (
          <p>
            <span>Episode: </span>
            {episode.episode}
          </p>
        )}
        {episode.episodes && (
          <p>
            <span>Episodes: </span>
            {episode.episodes[0]}, {episode.episodes[1]}
          </p>
        )}
      </div>
      <p className="summary-p">{episode.summary}</p>

      <Image src={episode.image_source} alt="img" className="episode-img" />

      <div className="season-episode-div">
        <p>
          <span>
            {Array.isArray(episode.writer) ? "Writers: " : "Writer: "}
          </span>
          {Array.isArray(episode.writer)
            ? episode.writer.join(", ")
            : episode.writer}
        </p>
        <p>
          <span>Director: </span>
          {episode.director}
        </p>
      </div>
    </div>
  );
};
