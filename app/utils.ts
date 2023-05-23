import {
  FolderIcon, ServerIcon, SignalIcon, GlobeAltIcon, ChartBarSquareIcon, Cog6ToothIcon,
} from '@heroicons/react/24/outline';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const navigation = [
  {
    name: 'Projects', href: '#', icon: FolderIcon, current: false,
  },
  {
    name: 'Deployments', href: '#', icon: ServerIcon, current: true,
  },
  {
    name: 'Activity', href: '#', icon: SignalIcon, current: false,
  },
  {
    name: 'Domains', href: '#', icon: GlobeAltIcon, current: false,
  },
  {
    name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false,
  },
  {
    name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false,
  },
];

export const teams = [
  {
    id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false,
  },
  {
    id: 2, name: 'Protocol', href: '#', initial: 'P', current: false,
  },
  {
    id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false,
  },
];
