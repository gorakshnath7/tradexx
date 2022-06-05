import ReWS from 'reconnecting-websocket';

type TradeUpdateEventHandler = (res: BinanceTradeStream) => void;
type OrderBookEventHandler = (res: OrderBookUpdateDto) => void;
type CandleUpdateEventHandler = (res: CandleUpdatePayload) => void;

export type BinanceEventHandler = TradeUpdateEventHandler | OrderBookEventHandler | CandleUpdateEventHandler;

export enum SocketType {
  TRADE = 'trade',
  CANDLE = 'kline',
  ORDER_BOOK = 'orderbook',
}

export type Sockets = Record<SocketType, ReWS>;

export interface BinanceTradeStream {
  e: 'trade'; // Event type
  E: number; // Event time
  s: string; // Symbol
  a: number; // Aggregate trade ID
  p: string; // Price
  q: string; // Quantity
  f: number; // First trade ID
  l: number; // Last trade ID
  T: number; // Trade time
  m: boolean; // Is the buyer the market maker?
}

export interface BinanceTradeDto {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number; // Trade executed timestamp, as same as `T` in the stream
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

type DepthArray = [string, string];

export interface OrderBookSnapshotDto {
  lastUpdateId: number;
  bids: DepthArray[];
  asks: DepthArray[];
}

export interface OrderBookUpdateDto {
  /**
   * Event type
   */
  e: 'depthUpdate';
  /**
   * Event time
   */
  E: number;
  /**
   * Symbol
   */
  s: string;
  /**
   * First update ID in event
   */
  U: number;
  /**
   * Final update ID in event
   */
  u: number;

  b: DepthArray[]; // ASKS
  a: DepthArray[]; // BIDS
}

export interface CandleUpdatePayload {
  e: 'kline'; // Event type
  E: number; // Event time
  s: string; // Symbol
  k: {
    t: number; // Kline start time
    T: number; // Kline close time
    s: string; // Symbol
    i: string; // Interval
    f: number; // First trade ID
    L: number; // Last trade ID
    o: string; // Open price
    c: string; // Close price
    h: string; // High price
    l: string; // Low price
    v: string; // Base asset volume
    n: number; // Number of trades
    x: boolean; // Is this kline closed?
    q: string; // Quote asset volume
    V: string; // Taker buy base asset volume
    Q: string; // Taker buy quote asset volume
    B: string; // Ignore
  };
}

export interface BinancePairInfoDto {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number; // First tradeId
  lastId: number; // Last tradeId
  count: number; // Trade count
}
