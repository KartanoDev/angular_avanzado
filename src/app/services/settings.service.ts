import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme: any = document.querySelector('#theme');

  constructor() {
    console.log('Settings Service init');

    const theme =
      localStorage.getItem('theme') || './assets/css/colors/default-dark.css';

    this.linkTheme.setAttribute('href', theme);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll(
      '#themecolors .selector'
    );
    links.forEach((elem: any) => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const selectedTheme = localStorage.getItem('theme');
      if (btnThemeUrl === selectedTheme) elem.classList.add('working');
    });
  }
}
