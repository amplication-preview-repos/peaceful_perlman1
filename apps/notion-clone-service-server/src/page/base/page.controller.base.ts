/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PageService } from "../page.service";
import { PageCreateInput } from "./PageCreateInput";
import { Page } from "./Page";
import { PageFindManyArgs } from "./PageFindManyArgs";
import { PageWhereUniqueInput } from "./PageWhereUniqueInput";
import { PageUpdateInput } from "./PageUpdateInput";
import { BlockFindManyArgs } from "../../block/base/BlockFindManyArgs";
import { Block } from "../../block/base/Block";
import { BlockWhereUniqueInput } from "../../block/base/BlockWhereUniqueInput";

export class PageControllerBase {
  constructor(protected readonly service: PageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Page })
  async createPage(@common.Body() data: PageCreateInput): Promise<Page> {
    return await this.service.createPage({
      data: {
        ...data,

        workspace: data.workspace
          ? {
              connect: data.workspace,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,

        workspace: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Page] })
  @ApiNestedQuery(PageFindManyArgs)
  async pages(@common.Req() request: Request): Promise<Page[]> {
    const args = plainToClass(PageFindManyArgs, request.query);
    return this.service.pages({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,

        workspace: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async page(
    @common.Param() params: PageWhereUniqueInput
  ): Promise<Page | null> {
    const result = await this.service.page({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        content: true,

        workspace: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePage(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() data: PageUpdateInput
  ): Promise<Page | null> {
    try {
      return await this.service.updatePage({
        where: params,
        data: {
          ...data,

          workspace: data.workspace
            ? {
                connect: data.workspace,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          content: true,

          workspace: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePage(
    @common.Param() params: PageWhereUniqueInput
  ): Promise<Page | null> {
    try {
      return await this.service.deletePage({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          content: true,

          workspace: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/blocks")
  @ApiNestedQuery(BlockFindManyArgs)
  async findBlocks(
    @common.Req() request: Request,
    @common.Param() params: PageWhereUniqueInput
  ): Promise<Block[]> {
    const query = plainToClass(BlockFindManyArgs, request.query);
    const results = await this.service.findBlocks(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        typeField: true,
        content: true,

        page: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/blocks")
  async connectBlocks(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: BlockWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      blocks: {
        connect: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/blocks")
  async updateBlocks(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: BlockWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      blocks: {
        set: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/blocks")
  async disconnectBlocks(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() body: BlockWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      blocks: {
        disconnect: body,
      },
    };
    await this.service.updatePage({
      where: params,
      data,
      select: { id: true },
    });
  }
}
