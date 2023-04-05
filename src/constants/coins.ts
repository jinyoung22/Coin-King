export interface ICoinInfo {
  id: string
  icon: string
  name: string
  unit: string
}

export const coinInfo: ICoinInfo[] = [
  {
    id: 'btc',
    icon: '/btc.svg',
    name: '비트코인',
    unit: 'BTC/KRW',
  },
  {
    id: 'eth',
    icon: '/eth.svg',
    name: '이더리움',
    unit: 'ETH/KRW',
  },
  {
    id: 'xrp',
    icon: '/xrp.svg',
    name: '리플',
    unit: 'XRP/KRW',
  },
]
