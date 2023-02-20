import { Keyword, Range, SavedObjectVersions } from "../types";

interface RefreshInterval {
  display: string;
  pause: boolean;
  value: number;
  section?: number;
}

export type Dashboard_13_2_0 = {
  attributes: {
    title: string;
    type?: Keyword;
    description?: string;
    hits?: Range<0, 999>;
    coatJSON: string; //JSONValue
    kibanaSavedObjectMeta: {
      searchSourceJSON: string; //JSONValue
    };
    panelsJSON: string; //JSONArray
    optionsJSON: string; //JSONValue
    uiStateJSON: string; //JSONValue
    flexLayoutJSON?: string; //JSONValue
    timeRestore: boolean;
    timeMode?: Keyword;
    timeFrom?: Keyword;
    timeTo?: Keyword;
    refreshInterval?: RefreshInterval;
    scriptIds: Keyword[];
    version: SavedObjectVersions;
  };
  version?: number | string;
  iGlobal: boolean;
}
