import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { BlockCreateNestedManyWithoutPagesInput } from "./BlockCreateNestedManyWithoutPagesInput";

export type PageCreateInput = {
  title?: string | null;
  content?: string | null;
  workspace?: WorkspaceWhereUniqueInput | null;
  blocks?: BlockCreateNestedManyWithoutPagesInput;
};
