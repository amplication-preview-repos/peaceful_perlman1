import { Module } from "@nestjs/common";
import { WorkspaceModuleBase } from "./base/workspace.module.base";
import { WorkspaceService } from "./workspace.service";
import { WorkspaceController } from "./workspace.controller";
import { WorkspaceResolver } from "./workspace.resolver";

@Module({
  imports: [WorkspaceModuleBase],
  controllers: [WorkspaceController],
  providers: [WorkspaceService, WorkspaceResolver],
  exports: [WorkspaceService],
})
export class WorkspaceModule {}
