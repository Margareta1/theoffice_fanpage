export type EpisodeType = {
    title: string;
    season: number;
    episode?: number;
    episodes?: number[];
    writer: string | string[];
    director: string | string[];
    summary: string;
    image_source: string;
}
