import {
  Body,
  Controller,
  OperationId,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';

import { Dashboard_13_2_0 } from '../saved_object_types/dashboard';
import { DashboardService } from '../dashboard_service'


@Route("api/13.2.0/saved_objects/dashboard")
export class DashboardController_13_2_0 extends Controller {
  @SuccessResponse("201", "Created") // Custom success response
  @Post('create')
  @OperationId('DASHBOARD_13_2_0')
  public async createDashboard(
    @Body() requestBody: Dashboard_13_2_0
  ): Promise<void> {
    try {
      // in case we need to do some logic with the request bodies 
      new DashboardService().create(requestBody);
      this.setStatus(201);
      return;
    } catch (e: any) {
      this.setStatus(e.status)
      throw e;
    }
  }
}
