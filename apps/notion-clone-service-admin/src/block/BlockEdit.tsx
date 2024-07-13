import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { PageTitle } from "../page/PageTitle";

export const BlockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
