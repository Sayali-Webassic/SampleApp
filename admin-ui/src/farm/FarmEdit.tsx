import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { FarmActivityTitle } from "../farmActivity/FarmActivityTitle";

export const FarmEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="farmActivities"
          reference="FarmActivity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FarmActivityTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="farmType"
          label="Farm Type"
          choices={[
            { label: "Farm", value: "Farm" },
            { label: "Terrace", value: "Terrace" },
            { label: "Garden", value: "Garden" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
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
    </Edit>
  );
};
