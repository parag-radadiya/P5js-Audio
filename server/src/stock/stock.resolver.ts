import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { StockResolverBase } from "./base/stock.resolver.base";
import { Stock } from "./base/Stock";
import { StockService } from "./stock.service";

@graphql.Resolver(() => Stock)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StockResolver extends StockResolverBase {
  constructor(
    protected readonly service: StockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
