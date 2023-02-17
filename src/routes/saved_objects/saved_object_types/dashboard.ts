import { Range } from "../types";

interface RefreshInterval {
  display: string;
  pause: boolean;
  value: number
}

type DashboardType = 'dashboard'

export type Dashboard_13_2_0 = {
  attributes: {
    title: string;
    description?: string;
    hits?: Range<0, 999>;
    columns?: string;
    sort?: string;
    panelsJSON: string;
    optionsJSON: string;
    uiStateJSON: string;
    coatJSON: string;
    flexLayoutJSON?: string;
    timeRestore: boolean;
    timeMode?: string;
    timeTo?: string;
    timeFrom?: string;
    refreshInterval?: RefreshInterval;
    scriptIds: string[];
    version: number;
    kibanaSavedObjectMeta: {
      searchSourceJSON: string;
    };
  };
  type: DashboardType;
  version: number | string;
}
