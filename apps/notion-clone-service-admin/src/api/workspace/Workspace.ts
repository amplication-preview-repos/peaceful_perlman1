import { Page } from "../page/Page";

export type Workspace = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  owner: string | null;
  pages?: Array<Page>;
};
