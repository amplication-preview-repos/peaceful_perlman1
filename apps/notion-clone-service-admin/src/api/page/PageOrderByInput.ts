import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  workspaceId?: SortOrder;
};
