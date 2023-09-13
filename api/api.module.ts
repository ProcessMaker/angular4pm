import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { CssSettingsService } from './api/cssSettings.service';
import { EnvironmentVariablesService } from './api/environmentVariables.service';
import { FilesService } from './api/files.service';
import { GroupMembersService } from './api/groupMembers.service';
import { GroupsService } from './api/groups.service';
import { NotificationsService } from './api/notifications.service';
import { PermissionsService } from './api/permissions.service';
import { PersonalTokensService } from './api/personalTokens.service';
import { ProcessCategoriesService } from './api/processCategories.service';
import { ProcessRequestsService } from './api/processRequests.service';
import { ProcessesService } from './api/processes.service';
import { RebuildScriptExecutorsService } from './api/rebuildScriptExecutors.service';
import { RequestFilesService } from './api/requestFiles.service';
import { ScreenCategoriesService } from './api/screenCategories.service';
import { ScreensService } from './api/screens.service';
import { ScriptCategoriesService } from './api/scriptCategories.service';
import { ScriptsService } from './api/scripts.service';
import { SecuirtyLogsService } from './api/secuirtyLogs.service';
import { SettingsService } from './api/settings.service';
import { SignalsService } from './api/signals.service';
import { TaskAssignmentsService } from './api/taskAssignments.service';
import { TasksService } from './api/tasks.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
