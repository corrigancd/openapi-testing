import { Keyword, Range, SavedObjectVersions } from "../types";

type IndexPatternAttributes = {
  pattern: Keyword;
  timeFieldName?: Keyword;
  intervalName?: string;
  /** Stringified Array<SavedSearchFieldDefinition> */
  fields: Keyword;
  sourceFilters?: string;
  excludeIndices: boolean;
  fieldFormatMap?: Keyword;
  error?: any;
};

type IndexingScopeString = 'G:S' | 'G:NS' | 'L' | 'N';

enum EditableFieldsMode {
  WHITELIST = 'whitelist',
  BLACKLIST = 'blacklist'
}

enum revisionFilterModes {
  FILTER_BY_INDEX_JOIN = 'filter-by-index-join'
}

interface RevisionSettings {
  index: Keyword;
  isEditable: boolean;
  primaryKey: Keyword;
  editableFieldsMode: EditableFieldsMode; // changed from the enum above
  filteringMode: revisionFilterModes; // changed from the enum above
  editableFieldsExceptions: Keyword[];
  indexingScope: IndexingScopeString;
  copyToFields?: Record<string, string[]>;
}

interface GlobalSearchSettings {
  enabled: boolean;
  boost: number;
}

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
      samplingScriptId?: Keyword;
      ui: {
        icon: Keyword;
        color: Keyword;
        shortDescription: Keyword;
        instanceLabelType?: Keyword;
        instanceLabelValue?: Keyword;
        instanceImageType?: string;
        instanceImageValue?: string;
      };
      limits?: {
        maxTimeRangeEnabled: boolean;
        maxTimeRange: number;
        maxTimeRangeUnit: Keyword;
        maxCardinalityEnabled: boolean;
        maxCardinality: number;
        maxCardinalityUnit: Keyword;
        maxJoinCardinalityEnabled: boolean;
        maxJoinCardinality: number;
        maxJoinCardinalityUnit: Keyword;
        maxJoinCardinalityApplyToSource: boolean;
        maxJoinCardinalityApplyToTarget: boolean;
      };
      revision?: RevisionSettings;
      highlight?: {
        fields: string;
      };
      globalSearch: GlobalSearchSettings;
      templateScripts: {
        scriptIds: Keyword[];
      };
    };
    version: Keyword;
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