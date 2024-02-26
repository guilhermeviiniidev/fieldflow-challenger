import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from 'src/interfaces/projects.interface';

@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {}

  @Get()
  async getAll(): Promise<Project[]> {
    return this.projectService.getAllProjects();
  }

  @Get('query')
  async getById(@Query('id') id: string): Promise<Project> {
    return this.projectService.getByIdProject(id);
  }

  @Post()
  async create(@Body() reqBody: Project): Promise<any> {
    return this.projectService.createProject(reqBody);
  }

  @Put('query')
  async update(
    @Query('id') id: string,
    @Body() body: Project,
  ): Promise<Project[]> {
    return this.projectService.renameProject(id, body.title);
  }

  @Delete('query')
  async delete(@Query('id') id: string): Promise<Project[]> {
    return this.projectService.deleteProject(id);
  }
}