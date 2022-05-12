import { FarmActivityUpdateManyWithoutFarmsInput } from "./FarmActivityUpdateManyWithoutFarmsInput";

export type FarmUpdateInput = {
  farmActivities?: FarmActivityUpdateManyWithoutFarmsInput;
  farmType?: "Farm" | "Garden" | "Terrace" | null;
  heightArea?: number | null;
  lengthArea?: number | null;
  sunlightAvailability?: "Low" | "Medium" | "High" | null;
  widthArea?: number | null;
};
