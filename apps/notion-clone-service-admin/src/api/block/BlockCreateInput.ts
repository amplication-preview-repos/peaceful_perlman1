import { InputJsonValue } from "../../types";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type BlockCreateInput = {
  typeField?: "Option1" | null;
  content?: InputJsonValue;
  page?: PageWhereUniqueInput | null;
};
