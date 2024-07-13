import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkspaceService } from "./workspace.service";
import { WorkspaceControllerBase } from "./base/workspace.controller.base";

@swagger.ApiTags("workspaces")
@common.Controller("workspaces")
export class WorkspaceController extends WorkspaceControllerBase {
  constructor(protected readonly service: WorkspaceService) {
    super(service);
  }
}
