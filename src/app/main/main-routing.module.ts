import { Component, NgModule } from '@angular/core';
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
import { PreInvestmentEvaluationComponent } from './pre-investment-management/pre-investment-evaluation/pre-investment-evaluation.component';
import { PositionProfitLossMonitorComponent } from './pre-investment-management/position-profit-loss-monitor/position-profit-loss-monitor.component';
import { InvestmentCompanyComponent } from './pre-investment-management/investment-company/investment-company.component';
import { ShareholderStructureComponent } from './equity-chips/shareholder-structure/shareholder-structure.component';
import { ShareholdingClassificationComponent } from './equity-chips/shareholding-classification/shareholding-classification.component';
import { DirectorsSupervisorsShareholdingComponent } from './equity-chips/directors-supervisors-shareholding/directors-supervisors-shareholding.component';
import { DailyLegalPersonComponent } from './equity-chips/daily-legal-person/daily-legal-person.component';
import { AiSpokerComponent } from './ai-news/ai-spoker/ai-spoker.component';
import { NewsGuideComponent } from './ai-news/news-guide/news-guide.component';
import { ExchangeRateLineComponent } from './economy/exchange-rate-line/exchange-rate-line.component';
import { FederalFundsRateComponent } from './economy/federal-funds-rate/federal-funds-rate.component';
import { UsOverallEconomyMapComponent } from './economy/us-overall-economy-map/us-overall-economy-map.component';
import { IndividualSearchComponent } from './sustainable-zone/individual-search/individual-search.component';
import { SummarySearchComponent } from './sustainable-zone/summary-search/summary-search.component';
import { GlobalMapComponent } from './financial-quotes/global-map/global-map.component';
import { MarketQuotationComponent } from './financial-quotes/market-quotation/market-quotation.component';

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
      {
        path: 'pre-investment-management', children: [
          { path: 'pre-investment-evaluation', component: PreInvestmentEvaluationComponent },
          { path: 'position-profit-loss-monitor', component: PositionProfitLossMonitorComponent },
          {path: 'investment-company', component: InvestmentCompanyComponent}
        ]
      },
      {
        path: 'equity-chips', children: [
          { path: 'shareholder-structure', component: ShareholderStructureComponent },
          { path: 'shareholding-classification', component: ShareholdingClassificationComponent },
          { path: 'directors-supervisors-shareholding', component: DirectorsSupervisorsShareholdingComponent },
          { path: 'daily-legal-person', component: DailyLegalPersonComponent }
        ]
      }, 
      {
        path: 'sustainable-zone', children: [
          { path: 'individual-search', component: IndividualSearchComponent },
          { path: 'summary-search', component: SummarySearchComponent }
        ]
      },
      {
        path: 'financial-quotes', children: [
          { path: 'global-map', component: GlobalMapComponent },
          { path: 'market-quotation', component: MarketQuotationComponent }
        ]
      },
      {
        path: 'economy', children: [
          { path: 'exchange-rate-line', component: ExchangeRateLineComponent },
          { path: 'federal-funds-rate', component: FederalFundsRateComponent },
          { path: 'us-overall-economy-map', component: UsOverallEconomyMapComponent }
        ]
      },
      {
        path: 'ai-news', children: [
          { path: 'ai-spoker', component: AiSpokerComponent },
          { path: 'news-guide', component: NewsGuideComponent }
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
