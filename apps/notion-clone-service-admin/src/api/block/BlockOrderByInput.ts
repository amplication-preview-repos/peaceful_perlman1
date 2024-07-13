import { SortOrder } from "../../util/SortOrder";

export type BlockOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  content?: SortOrder;
  pageId?: SortOrder;
};
