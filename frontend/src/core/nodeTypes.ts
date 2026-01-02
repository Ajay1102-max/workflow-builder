
export type WorkflowNodeType =
  | "entry"
  | "exit"
  | "jsonToArray"
  | "arrayToJson"
  | "arrayMapping";

export interface BaseNodeSettings {
  name: string;
  description?: string;
}

// Specific node settings

export interface EntryNodeSettings extends BaseNodeSettings {}

export interface ExitNodeSettings extends BaseNodeSettings {}

export interface JsonToArraySettings extends BaseNodeSettings {
  loopMode: boolean;
}

export interface ArrayToJsonSettings extends BaseNodeSettings {
  loopMode: boolean;
  keyField?: string;
}

export interface ArrayMappingSettings extends BaseNodeSettings {
  loopMode: boolean;
  mappingLogic?: string;
}

// Union type for all possible node settings
export type NodeSettings =
  | EntryNodeSettings
  | ExitNodeSettings
  | JsonToArraySettings
  | ArrayToJsonSettings
  | ArrayMappingSettings;
