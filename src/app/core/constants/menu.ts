import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Index', route: '/dashboard/index' },
            { label: 'Projects', route: '/dashboard/projects' },
            { label: 'Experiences', route: '/dashboard/experience' },
            // { label: 'Crypto', route: '/dashboard/crypto' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/exclamation-triangle.svg',
          label: 'Erros',
          route: '/errors',
          children: [
            { label: '404', route: '/errors/404' },
            { label: '500', route: '/errors/500' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/expand.svg',
          label: 'Full Page',
          route: '/weather',
          children: [{ label: 'Address', route: '/weather/address' }],
        },
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Components',
          route: '/components',
          children: [
            { label: 'Table', route: '/components/table' },
            { label: 'Address', route: '/components/weather' },
          ],
        },
      ],
    },
  ];
}
