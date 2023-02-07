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
import { SavedSearch_14_0_0 } from "./types";

import { SavedSearchService } from './saved_search_service'


@Route("api/saved_objects/search")
export class SavedSearchController_14_0_0 extends Controller {
  @SuccessResponse("201", "Created") // Custom success response
  @Post('create/14.0.0')
  public async createSavedSearch(
    @Body() requestBody: SavedSearch_14_0_0
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
}
