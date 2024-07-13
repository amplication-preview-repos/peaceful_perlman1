import { Workspace } from "../workspace/Workspace";
import { Block } from "../block/Block";

export type Page = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  workspace?: Workspace | null;
  blocks?: Array<Block>;
};
