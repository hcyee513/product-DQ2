import { HeaderService } from './../header/header.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/interface/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  public isSidebarOpen: boolean = false;
  public isActive: number | null = null;
  public showChild: boolean = false;

  public sidebarMenu: Menu[] = [
    {
      title: '財報分析',
      iconClass: 'icon-pie-chart-light',
      items: [
        { title: '戰情室', href: '/main/financial-analysis/situation-room' },
        { title: '損益分析', href: '/main/financial-analysis/profit-loss-analysis' },
        { title: '資產負債分析', href: '/main/financial-analysis/asset-liability-analysis' },
        { title: '杜邦分析', href: '/main/financial-analysis/dupont-analysis' },
        { title: '財務三表', href: null }],
      itemsChild: [
        { title: '綜合損益表', href: '/main/financial-analysis/financial-statements/income-statement' },
        { title: '資金負債表', href: '/main/financial-analysis/financial-statements/balance-sheet' },
        { title: '現金流量表', href: '/main/financial-analysis/financial-statements/cash-flow-statement' }
    ]},
    {
      title: '資金調度', iconClass: 'icon-cash-coin-light', items: [
        { title: '現金流預測', href: '/main/fund-scheduling/cash-flow-forecast' },
        { title: '應收帳款分析', href: '/main/fund-scheduling/accounts-receivable-analysis' },
        { title: '存貨分析', href: '/main/fund-scheduling/inventory-analysis' }]
    },
    {
      title: '投資管理', iconClass: 'icon-piggy-bank-light', items: [
        { title: '投前評估', href: '/main/pre-investment-management/pre-investment-evaluation' },
        { title: '部位損益監控', href: '/main/pre-investment-management/position-profit-loss-monitor' },
        { title: '轉投資公司', href: '/main/pre-investment-management/investment-company' }]
    },
    {
      title: '股權籌碼', iconClass: 'icon-coins-light', items: [
        { title: '股權結構', href: '/main/equity-chips/shareholder-structure' },
        { title: '持股分級', href: '/main/equity-chips/shareholding-classification' },
        { title: '董監持股', href: '/main/equity-chips/directors-supervisors-shareholding' },
        { title: '每日法人', href: '/main/equity-chips/daily-legal-person' }]
    },
    { title: '永續專區', iconClass: 'icon-feather-light', items: [{ title: '個股查詢', href: '' }, { title: '彙總查詢', href: '' }] },
    { title: '金融行情', iconClass: 'icon-chart-light', items: [{ title: '全球地圖', href: '' }, { title: '市場報價', href: '' }] },
    {
      title: '印象總經', iconClass: 'icon-graph-down-light', items: [
        { title: '匯價五線譜', href: '/main/economy/exchange-rate-line' },
        { title: 'Fed利率會議', href: '/main/economy/federal-funds-rate' },
        { title: '美國總經地圖', href: '/main/economy/us-overall-economy-map' }]
    },
    {
      title: 'AI新聞眼', iconClass: 'icon-ai-light', items: [
        { title: 'AI發言人', href: '/main/ai-news/ai-spoker' },
        { title: '新聞導覽', href: '/main/ai-news/news-guide' }]
    },
  ]

  /** 初始是淺色 */
  private modeKey = 'colorMode';
  @Output() colorMode: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  public toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  public toggleDropdown(index: number): void {
    if (this.isActive !== index) {
      this.isActive = index;
    } else {
      this.isActive = null;
    }
  }

  public toggleDropdownChild(item: any) {
    this.showChild = !this.showChild;

  }

  public onItemClicked(title: string) {
    this.headerService.changeTitle(title);
  }

  public changeMode(isChecked: boolean) {
    // true = 深色
    this.colorMode.emit(isChecked);
    localStorage.setItem(this.modeKey, JSON.stringify(isChecked));
  }

}
