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
import { FarmActivityWhereInput } from "./FarmActivityWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FarmActivityListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FarmActivityWhereInput,
  })
  @ValidateNested()
  @Type(() => FarmActivityWhereInput)
  @IsOptional()
  @Field(() => FarmActivityWhereInput, {
    nullable: true,
  })
  every?: FarmActivityWhereInput;

  @ApiProperty({
    required: false,
    type: () => FarmActivityWhereInput,
  })
  @ValidateNested()
  @Type(() => FarmActivityWhereInput)
  @IsOptional()
  @Field(() => FarmActivityWhereInput, {
    nullable: true,
  })
  some?: FarmActivityWhereInput;

  @ApiProperty({
    required: false,
    type: () => FarmActivityWhereInput,
  })
  @ValidateNested()
  @Type(() => FarmActivityWhereInput)
  @IsOptional()
  @Field(() => FarmActivityWhereInput, {
    nullable: true,
  })
  none?: FarmActivityWhereInput;
}
export { FarmActivityListRelationFilter };
