import { FarmActivityListRelationFilter } from "../farmActivity/FarmActivityListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FarmWhereInput = {
  farmActivities?: FarmActivityListRelationFilter;
  heightArea?: FloatNullableFilter;
  id?: StringFilter;
  lengthArea?: FloatNullableFilter;
  sunlightAvailability?: "Low" | "Medium" | "High";
  widthArea?: FloatNullableFilter;
};
