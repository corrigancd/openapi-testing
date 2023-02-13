type IndexPatternAttributes = {
  pattern: string;
  timeFieldName?: string;
  intervalName?: string;
  /** Stringified Array<SavedSearchFieldDefinition> */
  fields: string;
  sourceFilters?: string;
  excludeIndices: boolean;
  fieldFormatMap?: string;
  error?: any;
};

export type IndexingScopeString = 'G:S' | 'G:NS' | 'L' | 'N';

export enum EditableFieldsMode {
  WHITELIST = 'whitelist',
  BLACKLIST = 'blacklist'
}

export enum revisionFilterModes {
  FILTER_BY_INDEX_JOIN = 'filter-by-index-join'
}

interface RevisionSettings {
  index: string;
  isEditable: boolean;
  primaryKey: string;
  editableFieldsMode: EditableFieldsMode; // changed from the enum above
  filteringMode: revisionFilterModes; // changed from the enum above
  editableFieldsExceptions: string[];
  indexingScope: IndexingScopeString;
  copyToFields?: Record<string, string[]>;
}

interface GlobalSearchSettings {
  enabled: boolean;
  boost: number;
}

// recursive range checking example. 
// Source: https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range/70307091#70307091
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>


type SavedObjectVersions = '13.2.0' | '14.0.0';

interface Keyword extends String { keyword: string };

export type SavedSearch_13_2_0 = {
  attributes: {
    title: string;
    description?: string;
    hits?: Range<0, 999>;
    columns?: string;
    sort?: string;
    kibanaSavedObjectMeta: {
      searchSourceJSON: string;
    };
    indexPattern: IndexPatternAttributes;
    siren: {
      parentId: Keyword;
      indexingScope?: IndexingScopeString;
      samplingScriptId?: string;
      ui: {
        icon: string;
        color: string;
        shortDescription: string;
        instanceLabelType?: string;
        instanceLabelValue?: string;
        instanceImageType?: string;
        instanceImageValue?: string;
      };
      limits?: {
        maxTimeRangeEnabled: boolean;
        maxTimeRange: number;
        maxTimeRangeUnit: string;
        maxCardinalityEnabled: boolean;
        maxCardinality: number;
        maxCardinalityUnit: string;
        maxJoinCardinalityEnabled: boolean;
        maxJoinCardinality: number;
        maxJoinCardinalityUnit: string;
        maxJoinCardinalityApplyToSource: boolean;
        maxJoinCardinalityApplyToTarget: boolean;
      };
      revision?: RevisionSettings;
      highlight?: {
        fields: string;
      };
      globalSearch: GlobalSearchSettings;
      templateScripts: {
        scriptIds: string[];
      };
    };
    version: string;
  };
  isGlobal: boolean;
  version: string;
}

export type SavedSearch_14_0_0 = {
  attributes: {
    title: string;
    description?: string;
    hits?: Range<0, 999>;
    columns?: string;
    sort?: string;
    kibanaSavedObjectMeta: {
      searchSourceJSON: string;
    };
    indexPattern: IndexPatternAttributes;
    siren: {
      parentId: Keyword;
      indexingScope?: IndexingScopeString;
      samplingScriptId?: string;
      ui: {
        icon: string;
        color: string;
        shortDescription: string;
        instanceLabelType?: string;
        instanceLabelValue?: string;
        instanceImageType?: string;
        instanceImageValue?: string;
      };
      limits?: {
        maxTimeRangeEnabled: boolean;
        maxTimeRange: number;
        maxTimeRangeUnit: string;
        maxCardinalityEnabled: boolean;
        maxCardinality: number;
        maxCardinalityUnit: string;
        maxJoinCardinalityEnabled: boolean;
        maxJoinCardinality: number;
        maxJoinCardinalityUnit: string;
        maxJoinCardinalityApplyToSource: boolean;
        maxJoinCardinalityApplyToTarget: boolean;
      };
      revision?: RevisionSettings;
      highlight?: {
        fields: string;
      };
      globalSearch: GlobalSearchSettings;
      templateScripts: {
        scriptIds: string[];
      };
    };
    version: SavedObjectVersions;
  };
  isGlobal: boolean;
  version: string;
}

export type AllSavedSearches = SavedSearch_13_2_0 | SavedSearch_14_0_0;