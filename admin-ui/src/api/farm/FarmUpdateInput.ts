import { FarmActivityUpdateManyWithoutFarmsInput } from "./FarmActivityUpdateManyWithoutFarmsInput";

export type FarmUpdateInput = {
  farmActivities?: FarmActivityUpdateManyWithoutFarmsInput;
  farmType?: Array<"Farm" | "Terrace" | "Garden">;
  heightArea?: number | null;
  lengthArea?: number | null;
  sunlightAvailability?: "Low" | "Medium" | "High" | null;
  widthArea?: number | null;
};
