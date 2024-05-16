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
    IncomeStatementComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    MainRoutingModule
  ]
})
export class MainModule { }
