import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  appName: string = 'Sample Webshop';

  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Cooler', link: '/cooler' },
    { text: 'Twist', link: '/twist' },
    { text: 'Scaffa', link: '/scaffa' },
    { text: 'Blazer', link: '/blazer' },
    { text: 'Admin', link: '/admin' },
  ];

  constructor() {}
}
