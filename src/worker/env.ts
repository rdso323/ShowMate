import type { ShowMateRoom } from "./room";
import type { PostMatchParams } from "./workflow";

export interface Env {
  ShowMateRoom: DurableObjectNamespace<ShowMateRoom>;
  ASSETS: Fetcher;
  DB: D1Database;
  CACHE: KVNamespace;
  POST_MATCH_WORKFLOW: Workflow<PostMatchParams>;
  AI?: Ai;
  SHOW_VECTORS?: VectorizeIndex;
  METRICS?: AnalyticsEngineDataset;
  TMDB_API_KEY?: string;
  CATALOG_SYNC_TOKEN?: string;
}
