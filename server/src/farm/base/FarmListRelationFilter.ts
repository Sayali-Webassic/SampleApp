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
import { FarmWhereInput } from "./FarmWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FarmListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FarmWhereInput,
  })
  @ValidateNested()
  @Type(() => FarmWhereInput)
  @IsOptional()
  @Field(() => FarmWhereInput, {
    nullable: true,
  })
  every?: FarmWhereInput;

  @ApiProperty({
    required: false,
    type: () => FarmWhereInput,
  })
  @ValidateNested()
  @Type(() => FarmWhereInput)
  @IsOptional()
  @Field(() => FarmWhereInput, {
    nullable: true,
  })
  some?: FarmWhereInput;

  @ApiProperty({
    required: false,
    type: () => FarmWhereInput,
  })
  @ValidateNested()
  @Type(() => FarmWhereInput)
  @IsOptional()
  @Field(() => FarmWhereInput, {
    nullable: true,
  })
  none?: FarmWhereInput;
}
export { FarmListRelationFilter };
