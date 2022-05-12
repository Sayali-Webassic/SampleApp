import { FarmActivity } from "../farmActivity/FarmActivity";

export type Farm = {
  createdAt: Date;
  farmActivities?: Array<FarmActivity>;
  farmType?: Array<"Farm" | "Terrace" | "Garden">;
  heightArea: number | null;
  id: string;
  lengthArea: number | null;
  sunlightAvailability?: "Low" | "Medium" | "High" | null;
  updatedAt: Date;
  widthArea: number | null;
};
