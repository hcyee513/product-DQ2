import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SituationRoomComponent } from './financial-analysis/situation-room/situation-room.component';
import { ProfitLossAnalysisComponent } from './financial-analysis/profit-loss-analysis/profit-loss-analysis.component';
import { AssetLiabilityAnalysisComponent } from './financial-analysis/asset-liability-analysis/asset-liability-analysis.component';
import { DupontAnalysisComponent } from './financial-analysis/dupont-analysis/dupont-analysis.component';
import { CashFlowStatementComponent } from './financial-analysis/financial-statements/cash-flow-statement/cash-flow-statement.component';
import { IncomeStatementComponent } from './financial-analysis/financial-statements/income-statement/income-statement.component';
import { BalanceSheetComponent } from './financial-analysis/financial-statements/balance-sheet/balance-sheet.component';
import { CashFlowForecastComponent } from './fund-scheduling/cash-flow-forecast/cash-flow-forecast.component';
import { AccountsReceivableAnalysisComponent } from './fund-scheduling/accounts-receivable-analysis/accounts-receivable-analysis.component';
import { InventoryAnalysisComponent } from './fund-scheduling/inventory-analysis/inventory-analysis.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'financial-analysis', children: [
          { path: 'situation-room', component: SituationRoomComponent },
          { path: 'profit-loss-analysis', component: ProfitLossAnalysisComponent },
          { path: 'asset-liability-analysis', component: AssetLiabilityAnalysisComponent },
          { path: 'dupont-analysis', component: DupontAnalysisComponent },
          {
            path: 'financial-statements', children: [
              { path: 'income-statement', component: IncomeStatementComponent },
              { path: 'balance-sheet', component: BalanceSheetComponent },
              { path: 'cash-flow-statement', component: CashFlowStatementComponent },
          ]}
        ]
      },
      {
        path: 'fund-scheduling', children: [
          { path: 'cash-flow-forecast', component: CashFlowForecastComponent },
          { path: 'accounts-receivable-analysis', component: AccountsReceivableAnalysisComponent },
          { path: 'inventory-analysis', component: InventoryAnalysisComponent }
        ]
      },
      { path: '', redirectTo: '/main/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/main/home' },
    ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MainRoutingModule { }
