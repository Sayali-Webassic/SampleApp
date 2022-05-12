import { FarmActivity } from "../farmActivity/FarmActivity";

export type Farm = {
  createdAt: Date;
  farmActivities?: Array<FarmActivity>;
  farmType?: "Farm" | "Terrace" | "Garden" | null;
  heightArea: number | null;
  id: string;
  lengthArea: number | null;
  sunlightAvailability?: "Low" | "Medium" | "High" | null;
  updatedAt: Date;
  widthArea: number | null;
};
