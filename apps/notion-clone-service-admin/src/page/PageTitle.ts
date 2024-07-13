import { Page as TPage } from "../api/page/Page";

export const PAGE_TITLE_FIELD = "title";

export const PageTitle = (record: TPage): string => {
  return record.title?.toString() || String(record.id);
};
