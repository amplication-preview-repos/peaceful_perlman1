import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";

export type WorkspaceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  owner?: StringNullableFilter;
  pages?: PageListRelationFilter;
};
