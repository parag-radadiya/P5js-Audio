/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StockWhereInput } from "./StockWhereInput";
import { Type } from "class-transformer";
import { StockOrderByInput } from "./StockOrderByInput";

@ArgsType()
class StockFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StockWhereInput,
  })
  @Field(() => StockWhereInput, { nullable: true })
  @Type(() => StockWhereInput)
  where?: StockWhereInput;

  @ApiProperty({
    required: false,
    type: [StockOrderByInput],
  })
  @Field(() => [StockOrderByInput], { nullable: true })
  @Type(() => StockOrderByInput)
  orderBy?: Array<StockOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StockFindManyArgs };
