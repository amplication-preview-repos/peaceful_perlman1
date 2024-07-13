import { PageCreateNestedManyWithoutWorkspacesInput } from "./PageCreateNestedManyWithoutWorkspacesInput";

export type WorkspaceCreateInput = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  pages?: PageCreateNestedManyWithoutWorkspacesInput;
};
