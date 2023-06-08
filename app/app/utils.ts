import {
  SignalIcon, Cog6ToothIcon, ListBulletIcon,
} from '@heroicons/react/24/outline';

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export const navigation = [
  {
    name: 'Dashboard', href: '/app', icon: ListBulletIcon, current: true,
  },
  // {
  //   name: 'KOLs', href: '/', icon: UsersIcon, current: false, disabled: true,
  // },
  // {
  //   name: 'Projects', href: '/', icon: FolderIcon, current: false, disabled: true,
  // },
  {
    name: 'Activity', href: '/app', icon: SignalIcon, current: false, disabled: true,
  },
  // {
  //   name: 'Domains', href: '#', icon: GlobeAltIcon, current: false,
  // },
  // {
  //   name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false,
  // },
  {
    name: 'Settings', href: '/app', icon: Cog6ToothIcon, current: false, disabled: true,
  },
];

export const teams = [
  // {
  //   id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false,
  // },
  // {
  //   id: 2, name: 'Protocol', href: '#', initial: 'P', current: false,
  // },
  // {
  //   id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false,
  // },
];

export function shortenWalletAddress(walletAddress: string): string {
  const shortenedAddress = `${walletAddress.slice(0, 6)}:${walletAddress.slice(-3)}`;

  return shortenedAddress;
}
