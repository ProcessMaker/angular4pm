export * from './processRequests.service';
import { ProcessRequestsService } from './processRequests.service';
export * from './tasks.service';
import { TasksService } from './tasks.service';
export const APIS = [ProcessRequestsService, TasksService];
