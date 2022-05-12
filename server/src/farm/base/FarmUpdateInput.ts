/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FarmActivityUpdateManyWithoutFarmsInput } from "./FarmActivityUpdateManyWithoutFarmsInput";
import { ValidateNested, IsOptional, IsNumber, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumFarmSunlightAvailability } from "./EnumFarmSunlightAvailability";
@InputType()
class FarmUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FarmActivityUpdateManyWithoutFarmsInput,
  })
  @ValidateNested()
  @Type(() => FarmActivityUpdateManyWithoutFarmsInput)
  @IsOptional()
  @Field(() => FarmActivityUpdateManyWithoutFarmsInput, {
    nullable: true,
  })
  farmActivities?: FarmActivityUpdateManyWithoutFarmsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  heightArea?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  lengthArea?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumFarmSunlightAvailability,
  })
  @IsEnum(EnumFarmSunlightAvailability)
  @IsOptional()
  @Field(() => EnumFarmSunlightAvailability, {
    nullable: true,
  })
  sunlightAvailability?: "Low" | "Medium" | "High" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  widthArea?: number | null;
}
export { FarmUpdateInput };
