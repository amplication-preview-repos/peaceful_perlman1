import { WorkspaceWhereInput } from "./WorkspaceWhereInput";
import { WorkspaceOrderByInput } from "./WorkspaceOrderByInput";

export type WorkspaceFindManyArgs = {
  where?: WorkspaceWhereInput;
  orderBy?: Array<WorkspaceOrderByInput>;
  skip?: number;
  take?: number;
};
