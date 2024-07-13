import { Block as TBlock } from "../api/block/Block";

export const BLOCK_TITLE_FIELD = "id";

export const BlockTitle = (record: TBlock): string => {
  return record.id?.toString() || String(record.id);
};
