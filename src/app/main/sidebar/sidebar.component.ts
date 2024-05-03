import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interface/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isSidebarOpen: boolean = false;
  public isActive: number | null = null;

  public sidebarMenu: Menu[] = [
    {
      title: '財報分析', iconClass: 'icon-pie-chart-light', items: ['戰情室', '損益分析', '資產負債分析', '杜邦分析', '財務三表'], itemsChild: ['綜合損益表', '資金負債表', '現金流量表'
    ]},
    { title: '資金調度', iconClass: 'icon-cash-coin-light', items: ['現金流預測', '應收帳款分析', '存貨分析'] },
    { title: '投資管理', iconClass: 'icon-piggy-bank-light', items: ['投前評估', '部位損益監控', '轉投資公司'] },
    { title: '股權籌碼', iconClass: 'icon-coins-light', items: ['股東結構', '持股分級', '董監持股', '每日法人'] },
    { title: '永續專區', iconClass: 'icon-feather-light', items: ['個股查詢', '彙總查詢'] },
    { title: '金融行情', iconClass: 'icon-chart-light', items: ['全球地圖', '市場報價'] },
    { title: '印象總經', iconClass: 'icon-graph-down-light', items: ['匯價五線譜', 'Fed利率會議', '美國總經地圖'] },
    { title: 'AI新聞眼', iconClass: 'icon-ai-light', items: ['AI發言人', '新聞導覽'] },
  ]

  constructor() { }

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
}
