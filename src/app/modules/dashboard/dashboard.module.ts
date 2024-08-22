import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { graphqlProvider } from 'src/app/graphql.provider';
import { BitqueryService } from 'src/app/core/services/bitquery.service';

@NgModule({
  imports: [DashboardRoutingModule, AngularSvgIconModule.forRoot()],
  providers: [provideHttpClient(withInterceptorsFromDi()), BitqueryService, ...graphqlProvider],
})
export class DashboardModule {}
