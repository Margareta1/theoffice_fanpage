import { EpisodeType } from "../types/types";
import "../styles/Episode.scss";

interface EpisodeProps {
  episode: EpisodeType;
}

export const Episode: React.FC<EpisodeProps> = ({ episode }) => {
  console.log(episode);
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

      <img src={episode.image_source} alt="img" className="episode-img" />

      <div className="season-episode-div">
        <p>
          <span>Writer: </span>
          {Array.isArray(episode.writer) ? episode.writer.join(', ') : episode.writer}
        </p>
        <p>
          <span>Director: </span>
          {episode.director}
        </p>
      </div>
    </div>
  );
};
