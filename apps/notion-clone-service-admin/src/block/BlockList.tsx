import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PAGE_TITLE_FIELD } from "../page/PageTitle";

export const BlockList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Blocks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="type" source="typeField" />
        <TextField label="content" source="content" />
        <ReferenceField label="page" source="page.id" reference="Page">
          <TextField source={PAGE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
