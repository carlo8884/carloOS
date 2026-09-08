'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { WaterType } from './model'

type StockingWaterContextValue = {
  waterType: WaterType
  setWaterType: (waterType: WaterType) => void
}

const StockingWaterContext = createContext<StockingWaterContextValue | null>(null)

export function StockingWaterProvider({ children }: { children: ReactNode }) {
  const [waterType, setWaterType] = useState<WaterType>('fresh')
  return (
    <StockingWaterContext.Provider value={{ waterType, setWaterType }}>
      {children}
    </StockingWaterContext.Provider>
  )
}

export function useStockingWater(): StockingWaterContextValue {
  const ctx = useContext(StockingWaterContext)
  if (!ctx) {
    throw new Error('useStockingWater must be used inside StockingWaterProvider')
  }
  return ctx
}
