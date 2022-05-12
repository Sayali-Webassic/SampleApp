import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  SelectInput,
} from "react-admin";

import { FarmActivityTitle } from "../farmActivity/FarmActivityTitle";

export const FarmCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="farmActivities"
          reference="FarmActivity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FarmActivityTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Height Area" source="heightArea" />
        <NumberInput label="Length Area" source="lengthArea" />
        <SelectInput
          source="sunlightAvailability"
          label="Sunlight Availability"
          choices={[
            { label: "Low", value: "Low" },
            { label: "Medium", value: "Medium" },
            { label: "High", value: "High" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Width Area" source="widthArea" />
      </SimpleForm>
    </Create>
  );
};
