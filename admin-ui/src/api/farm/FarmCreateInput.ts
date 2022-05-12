import { FarmActivityCreateNestedManyWithoutFarmsInput } from "./FarmActivityCreateNestedManyWithoutFarmsInput";

export type FarmCreateInput = {
  farmActivities?: FarmActivityCreateNestedManyWithoutFarmsInput;
  farmType?: Array<"Farm" | "Terrace" | "Garden">;
  heightArea?: number | null;
  lengthArea?: number | null;
  sunlightAvailability?: "Low" | "Medium" | "High" | null;
  widthArea?: number | null;
};
