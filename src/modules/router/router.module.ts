import { Module } from '@nestjs/common';
import { RouterModule as RM } from '@nestjs/core';
import { RouterService } from './router.service';
import { RouterController } from './router.controller';
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [
    AdminModule,
    DashboardModule,
    MetricsModule,
    RM.register([
      {
        path: 'route1',
        module: AdminModule,
        children: [
          {
            path: 'route2',
            module: DashboardModule,
          },
          {
            path: 'route3',
            module: MetricsModule,
          },
        ],
      },
    ]),
  ],
  controllers: [RouterController],
  providers: [RouterService],
})
export class RouterModule {}
