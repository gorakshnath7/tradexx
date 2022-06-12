import { TypeTheme } from '../../theme/types';

export type SortingPairs =
  | 'Volume'
  | 'VolumeDescending'
  | 'Price'
  | 'PriceDescending'
  | 'Name'
  | 'NameDescending'
  | 'Change'
  | 'ChangeDescending';

export interface CoreReducer {
  isMac: boolean;
  isOnline: boolean;
  reloadChart: boolean;
  storeVersion: number;
  theme: TypeTheme;
  icons: { [key: string]: string };
  settingOpen: boolean;
  settingPage: string;
  pairsBarOpen: boolean;
  supportedIntervals: string[];
  historyComponent: string;
  activeOrderType: string;
  showAllAccounts: boolean;
  showAllPairs: boolean;
  showAllPositions: boolean;
  orderBookIsLoading: boolean;
  tradesIsLoading: boolean;
  pairListSorting: SortingPairs;
}

export interface SetToCore {
  isMac?: boolean;
  isOnline?: boolean;
  reloadChart?: boolean;
  storeVersion?: number;
  theme?: TypeTheme;
  icons?: { [key: string]: string };
  settingOpen?: boolean;
  settingPage?: string;
  pairsBarOpen?: boolean;
  supportedIntervals?: string[];
  historyComponent?: string;
  activeOrderType?: string;
  showAllAccounts?: boolean;
  showAllPairs?: boolean;
  showAllPositions?: boolean;
  orderBookIsLoading?: boolean;
  tradesIsLoading?: boolean;
  pairListSorting?: SortingPairs;
}
