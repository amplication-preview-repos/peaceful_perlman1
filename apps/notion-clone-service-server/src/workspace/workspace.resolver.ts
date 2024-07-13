import * as graphql from "@nestjs/graphql";
import { WorkspaceResolverBase } from "./base/workspace.resolver.base";
import { Workspace } from "./base/Workspace";
import { WorkspaceService } from "./workspace.service";

@graphql.Resolver(() => Workspace)
export class WorkspaceResolver extends WorkspaceResolverBase {
  constructor(protected readonly service: WorkspaceService) {
    super(service);
  }
}
