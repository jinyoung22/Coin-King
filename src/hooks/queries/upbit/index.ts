import { UseQueryResult, useQuery } from 'react-query'
import { getDayCandles } from '@/services/upbit'
import { AxiosError } from 'axios'
import { IDayCandles } from '@/model/upbit/candles'
const prefix = 'upbit/'

//useQuery Key
export const useQueryKey = {
  GET_DAY_CANDLES: prefix + 'getDayCandles',
}

//custom hook
export const useGetDayCandles = (
  coinCodes: string
): UseQueryResult<IDayCandles[], AxiosError> => {
  return useQuery([useQueryKey.GET_DAY_CANDLES, coinCodes], () =>
    getDayCandles(coinCodes)
  )
}
