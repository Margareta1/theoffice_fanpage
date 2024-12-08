import { Collapse } from "antd";
import { BestEpisodes } from "../assets";
import { Episode } from "../components/Episode";
import { EpisodeType } from "../types/types";

export const BestEpisodesPage = () => {
  return (
    <>
      <div className="custom-h1">
        <h1>
          <span>TOP 10 BEST EPISODES</span>
        </h1>
      </div>
      <Collapse
        items={BestEpisodes.best_episodes.map(
          (episode: EpisodeType, index) => ({
            label: (
              <h3>
                {index + 1}. {episode.title}
              </h3>
            ),
            key: index,
            children: <Episode episode={episode} />,
          })
        )}
      />
    </>
  );
};
