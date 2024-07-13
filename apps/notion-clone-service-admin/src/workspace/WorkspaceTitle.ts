import { Workspace as TWorkspace } from "../api/workspace/Workspace";

export const WORKSPACE_TITLE_FIELD = "name";

export const WorkspaceTitle = (record: TWorkspace): string => {
  return record.name?.toString() || String(record.id);
};
