import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { SavedSearch } from "./types";

import { SavedSearchService } from './saved_search_service'

@Route("api/saved_objects/search")
export class SavedSearchController extends Controller {
  @SuccessResponse("201", "Created") // Custom success response
  @Post('create')
  public async createSavedSearch(
    @Body() requestBody: SavedSearch
  ): Promise<string> {
    try {
      // in case we need to do some logic with the request bodies
      new SavedSearchService().create(requestBody);
      this.setStatus(201); // set return status 201
      return 'SUCCESS ' + 201; 
    } catch (e: any) {
      this.setStatus(e.status)
      throw e;
    }
  }

  @Post('fail')
  public async createSavedSearchFail(
    @Body() requestBody: SavedSearch
  ): Promise<string> {
    try {
      // in case we need to do some logic with the request bodies
      new SavedSearchService().fail();
      this.setStatus(201); // set return status 201
      return 'SUCCESS ' + 201; 
    } catch (e: any) {
      throw e;
    }
  }
}
