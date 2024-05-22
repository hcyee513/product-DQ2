import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainRoutingModule } from './main-routing.module';
import { SituationRoomComponent } from './financial-analysis/situation-room/situation-room.component';
import { DropDownListComponent } from '../share/drop-down-list/drop-down-list.component';
import { ProfitLossAnalysisComponent } from './financial-analysis/profit-loss-analysis/profit-loss-analysis.component';
import { AssetLiabilityAnalysisComponent } from './financial-analysis/asset-liability-analysis/asset-liability-analysis.component';
import { DupontAnalysisComponent } from './financial-analysis/dupont-analysis/dupont-analysis.component';
import { CashFlowStatementComponent } from './financial-analysis/financial-statements/cash-flow-statement/cash-flow-statement.component';
import { BalanceSheetComponent } from './financial-analysis/financial-statements/balance-sheet/balance-sheet.component';
import { IncomeStatementComponent } from './financial-analysis/financial-statements/income-statement/income-statement.component';
import { RadioBoxComponent } from '../share/radio-box/radio-box.component';
import { CashFlowForecastComponent } from './fund-scheduling/cash-flow-forecast/cash-flow-forecast.component';
import { AccountsReceivableAnalysisComponent } from './fund-scheduling/accounts-receivable-analysis/accounts-receivable-analysis.component';
import { InventoryAnalysisComponent } from './fund-scheduling/inventory-analysis/inventory-analysis.component';
import { PreInvestmentEvaluationComponent } from './pre-investment-management/pre-investment-evaluation/pre-investment-evaluation.component';
import { PositionProfitLossMonitorComponent } from './pre-investment-management/position-profit-loss-monitor/position-profit-loss-monitor.component';
import { InvestmentCompanyComponent } from './pre-investment-management/investment-company/investment-company.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SituationRoomComponent,
    DropDownListComponent,
    ProfitLossAnalysisComponent,
    AssetLiabilityAnalysisComponent,
    DupontAnalysisComponent,
    CashFlowStatementComponent,
    BalanceSheetComponent,
    IncomeStatementComponent,
    RadioBoxComponent,
    CashFlowForecastComponent,
    AccountsReceivableAnalysisComponent,
    InventoryAnalysisComponent,
    PreInvestmentEvaluationComponent,
    PositionProfitLossMonitorComponent,
    InvestmentCompanyComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    MainRoutingModule
  ]
})
export class MainModule { }
