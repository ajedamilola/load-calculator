/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { ApplianceList } from '../components/appliance-list'
import { ResultsPanel } from '../components/results-panel'
import { defaultAppliances } from '../data/appliances'
import {
  calculateTotalLoad,
  calculateRecommendedInverterRating,
  calculateBackupTime,
} from '../utils/calculations'

export default function InverterCalculator() {
  const [appliances, setAppliances] = useState(defaultAppliances)
  const [selectedBatteryCapacity, setSelectedBatteryCapacity] = useState<number | null>(null)

  const totalLoad = calculateTotalLoad(appliances)
  const recommendedInverterRating = calculateRecommendedInverterRating(totalLoad)
  const backupTime = calculateBackupTime(totalLoad, selectedBatteryCapacity || 0)

  const handleAppliancesUpdate = (updatedAppliances: any[]) => {
    setAppliances(updatedAppliances)
  }

  const handleBatteryCapacityChange = (value: string) => {
    setSelectedBatteryCapacity(parseInt(value))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white text-center">
            Know which inverter you need, what it can carry and for how long
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-8">
            Select the type of load you wish to connect to the inverter to calculate
            the estimated rating of the inverter you need. We recommend that you
            take into account your necessity in peak conditions. This will help you
            to derive a more accurate rating, that you would require in such
            condition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ApplianceList
                appliances={appliances}
                onUpdate={handleAppliancesUpdate}
              />
            </div>
            <div>
              <ResultsPanel
                totalLoad={totalLoad}
                recommendedInverterRating={recommendedInverterRating}
                backupTime={backupTime}
                onBatteryCapacityChange={handleBatteryCapacityChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

