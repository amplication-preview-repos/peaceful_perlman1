import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { PageTitle } from "../page/PageTitle";

export const BlockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <ReferenceInput source="page.id" reference="Page" label="page">
          <SelectInput optionText={PageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
