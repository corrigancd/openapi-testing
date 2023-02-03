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

export type SavedSearchAttributes = {
  title: string;
  description?: string;
  hits?: number;
  columns?: string;
  sort?: string;
  kibanaSavedObjectMeta: {
    searchSourceJSON: string;
  };
  indexPattern: IndexPatternAttributes;
  siren: {
    parentId: string;
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

export type SavedSearch = {
  attributes: SavedSearchAttributes;
  isGlobal: boolean;
  version: string;
}