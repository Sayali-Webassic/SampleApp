import { FarmActivityUpdateManyWithoutFarmsInput } from "./FarmActivityUpdateManyWithoutFarmsInput";

export type FarmUpdateInput = {
  farmActivities?: FarmActivityUpdateManyWithoutFarmsInput;
  farmType?: "Farm" | "Terrace" | "Garden" | null;
  heightArea?: number | null;
  lengthArea?: number | null;
  sunlightAvailability?: "Low" | "Medium" | "High" | null;
  widthArea?: number | null;
};
