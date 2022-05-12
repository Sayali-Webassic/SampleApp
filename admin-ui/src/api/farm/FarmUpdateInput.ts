import { FarmActivityUpdateManyWithoutFarmsInput } from "./FarmActivityUpdateManyWithoutFarmsInput";

export type FarmUpdateInput = {
  farmActivities?: FarmActivityUpdateManyWithoutFarmsInput;
  heightArea?: number | null;
  lengthArea?: number | null;
  sunlightAvailability?: "Low" | "Medium" | "High" | null;
  widthArea?: number | null;
};
