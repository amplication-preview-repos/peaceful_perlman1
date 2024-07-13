import { InputJsonValue } from "../../types";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type BlockUpdateInput = {
  typeField?: "Option1" | null;
  content?: InputJsonValue;
  page?: PageWhereUniqueInput | null;
};
