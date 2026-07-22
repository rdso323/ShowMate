import type { FlixMatchRoom } from "./room";
import type { PostMatchParams } from "./workflow";

export interface Env {
  FlixMatchRoom: DurableObjectNamespace<FlixMatchRoom>;
  ASSETS: Fetcher;
  AI: Ai;
  DB: D1Database;
  CACHE: KVNamespace;
  SHOW_VECTORS: VectorizeIndex;
  POST_MATCH_WORKFLOW: Workflow<PostMatchParams>;
  METRICS: AnalyticsEngineDataset;
}
