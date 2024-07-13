import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { BlockListRelationFilter } from "../block/BlockListRelationFilter";

export type PageWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  workspace?: WorkspaceWhereUniqueInput;
  blocks?: BlockListRelationFilter;
};
