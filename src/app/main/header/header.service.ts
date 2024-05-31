import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private titleKey = 'currentTitle';
  private titleSource = new BehaviorSubject<string>(this.getTitleFromLocalStorage());
  currentTitle = this.titleSource.asObservable();

  private getTitleFromLocalStorage(): string {
    return localStorage.getItem(this.titleKey) || '戰情室';
  }

  public changeTitle(title: string) {
    localStorage.setItem(this.titleKey, title);
    this.titleSource.next(title);
  }

  public clearTitle() {
    localStorage.removeItem(this.titleKey);
    this.titleSource.next('戰情室');
  }
}
