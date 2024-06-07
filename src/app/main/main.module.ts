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
import { ProfitLossAnalysisComponent } from './financial-analysis/profit-loss-analysis/profit-loss-analysis.component';
import { AssetLiabilityAnalysisComponent } from './financial-analysis/asset-liability-analysis/asset-liability-analysis.component';
import { DupontAnalysisComponent } from './financial-analysis/dupont-analysis/dupont-analysis.component';
import { CashFlowStatementComponent } from './financial-analysis/financial-statements/cash-flow-statement/cash-flow-statement.component';
import { BalanceSheetComponent } from './financial-analysis/financial-statements/balance-sheet/balance-sheet.component';
import { IncomeStatementComponent } from './financial-analysis/financial-statements/income-statement/income-statement.component';
import { CashFlowForecastComponent } from './fund-scheduling/cash-flow-forecast/cash-flow-forecast.component';
import { AccountsReceivableAnalysisComponent } from './fund-scheduling/accounts-receivable-analysis/accounts-receivable-analysis.component';
import { InventoryAnalysisComponent } from './fund-scheduling/inventory-analysis/inventory-analysis.component';
import { PreInvestmentEvaluationComponent } from './pre-investment-management/pre-investment-evaluation/pre-investment-evaluation.component';
import { PositionProfitLossMonitorComponent } from './pre-investment-management/position-profit-loss-monitor/position-profit-loss-monitor.component';
import { InvestmentCompanyComponent } from './pre-investment-management/investment-company/investment-company.component';
import { ShareholderStructureComponent } from './equity-chips/shareholder-structure/shareholder-structure.component';
import { ShareholdingClassificationComponent } from './equity-chips/shareholding-classification/shareholding-classification.component';
import { DirectorsSupervisorsShareholdingComponent } from './equity-chips/directors-supervisors-shareholding/directors-supervisors-shareholding.component';
import { DailyLegalPersonComponent } from './equity-chips/daily-legal-person/daily-legal-person.component';
// import { IndividualSearchComponent } from './sustainability-zone/individual-search/individual-search.component';
// import { SummarySearchComponent } from './sustainability-zone/summary-search/summary-search.component';
import { AiSpokerComponent } from './ai-news/ai-spoker/ai-spoker.component';
import { NewsGuideComponent } from './ai-news/news-guide/news-guide.component';
import { ExchangeRateLineComponent } from './economy/exchange-rate-line/exchange-rate-line.component';
import { FederalFundsRateComponent } from './economy/federal-funds-rate/federal-funds-rate.component';
import { UsOverallEconomyMapComponent } from './economy/us-overall-economy-map/us-overall-economy-map.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SituationRoomComponent,
    ProfitLossAnalysisComponent,
    AssetLiabilityAnalysisComponent,
    DupontAnalysisComponent,
    CashFlowStatementComponent,
    BalanceSheetComponent,
    IncomeStatementComponent,
    CashFlowForecastComponent,
    AccountsReceivableAnalysisComponent,
    InventoryAnalysisComponent,
    PreInvestmentEvaluationComponent,
    PositionProfitLossMonitorComponent,
    InvestmentCompanyComponent,
    ShareholderStructureComponent,
    ShareholdingClassificationComponent,
    DirectorsSupervisorsShareholdingComponent,
    DailyLegalPersonComponent,
    // IndividualSearchComponent,
    // SummarySearchComponent,
    AiSpokerComponent,
    NewsGuideComponent,
    ExchangeRateLineComponent,
    FederalFundsRateComponent,
    UsOverallEconomyMapComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    MainRoutingModule,
    ShareModule
  ]
})
export class MainModule { }
