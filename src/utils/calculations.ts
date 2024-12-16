/* eslint-disable @typescript-eslint/no-explicit-any */
export function calculateTotalLoad(appliances: any[]): number {
  return appliances.reduce((total, appliance) => {
    return total + (appliance.quantity * appliance.power)
  }, 0)
}

export function calculateRecommendedInverterRating(totalLoad: number): number {
  // Add 20% safety margin
  return Math.ceil(totalLoad * 1.2 / 100) * 100
}

export function calculateBackupTime(totalLoad: number, batteryCapacityAh: number): number {
  if (totalLoad === 0 || !batteryCapacityAh) return 0

  // Assuming 12V battery system
  const batteryCapacityWh = batteryCapacityAh * 12
  // Consider 80% depth of discharge and 90% inverter efficiency
  const usableCapacity = batteryCapacityWh * 0.8 * 0.9

  return Number((usableCapacity / totalLoad).toFixed(1))
}

