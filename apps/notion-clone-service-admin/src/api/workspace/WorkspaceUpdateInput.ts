import { PageUpdateManyWithoutWorkspacesInput } from "./PageUpdateManyWithoutWorkspacesInput";

export type WorkspaceUpdateInput = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  pages?: PageUpdateManyWithoutWorkspacesInput;
};
