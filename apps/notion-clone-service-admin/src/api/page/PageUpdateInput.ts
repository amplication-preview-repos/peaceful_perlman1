import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { BlockUpdateManyWithoutPagesInput } from "./BlockUpdateManyWithoutPagesInput";

export type PageUpdateInput = {
  title?: string | null;
  content?: string | null;
  workspace?: WorkspaceWhereUniqueInput | null;
  blocks?: BlockUpdateManyWithoutPagesInput;
};
