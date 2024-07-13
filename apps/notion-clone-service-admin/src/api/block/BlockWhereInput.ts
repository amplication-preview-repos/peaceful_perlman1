import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type BlockWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  content?: JsonFilter;
  page?: PageWhereUniqueInput;
};
