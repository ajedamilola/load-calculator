import { Appliance, BatteryCapacity } from '../types/calculator'

export const defaultAppliances: Appliance[] = [
  { id: '1', name: 'Normal Bulb', defaultWattage: 60, quantity: 0, power: 60 },
  { id: '2', name: 'Tube Light', defaultWattage: 40, quantity: 0, power: 40 },
  { id: '3', name: 'LED Lamp', defaultWattage: 9, quantity: 0, power: 9 },
  { id: '4', name: 'Fan', defaultWattage: 75, quantity: 0, power: 75 },
  { id: '5', name: 'LCD/LED TV (< 42")', defaultWattage: 100, quantity: 0, power: 100 },
  { id: '6', name: 'Desktop Computer', defaultWattage: 200, quantity: 0, power: 200 },
  { id: '7', name: 'Laptop', defaultWattage: 65, quantity: 0, power: 65 },
  { id: '8', name: 'Refrigerator (165-250Ltr)', defaultWattage: 150, quantity: 0, power: 150 },
  { id: '9', name: 'AC - 1HP', defaultWattage: 1000, quantity: 0, power: 1000 },
  { id: '10', name: 'AC - 1.5HP', defaultWattage: 1500, quantity: 0, power: 1500 },
  { id: '11', name: 'Washing Machine', defaultWattage: 500, quantity: 0, power: 500 },
  { id: '12', name: 'Microwave Oven', defaultWattage: 1000, quantity: 0, power: 1000 },
]

export const batteryCapacities: BatteryCapacity[] = [
  { id: '1', value: 100, label: '100Ah' },
  { id: '2', value: 150, label: '150Ah' },
  { id: '3', value: 200, label: '200Ah' },
  { id: '4', value: 250, label: '250Ah' },
]

