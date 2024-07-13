import { JsonValue } from "type-fest";
import { Page } from "../page/Page";

export type Block = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField?: "Option1" | null;
  content: JsonValue;
  page?: Page | null;
};
