import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Appliance } from "../types/calculator"

interface ApplianceListProps {
  appliances: Appliance[]
  onUpdate: (updatedAppliances: Appliance[]) => void
}

export function ApplianceList({ appliances, onUpdate }: ApplianceListProps) {
  const handleQuantityChange = (id: string, value: string) => {
    const quantity = parseInt(value) || 0
    const updatedAppliances = appliances.map(appliance =>
      appliance.id === id ? { ...appliance, quantity } : appliance
    )
    onUpdate(updatedAppliances)
  }

  const handlePowerChange = (id: string, value: string) => {
    const power = parseInt(value) || 0
    const updatedAppliances = appliances.map(appliance =>
      appliance.id === id ? { ...appliance, power } : appliance
    )
    onUpdate(updatedAppliances)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
        <div className="col-span-6">Appliance</div>
        <div className="col-span-3">Quantity</div>
        <div className="col-span-3">Power (W)</div>
      </div>
      {appliances.map(appliance => (
        <div key={appliance.id} className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-6">
            <Label>{appliance.name}</Label>
          </div>
          <div className="col-span-3">
            <Input
              type="number"
              min="0"
              value={appliance.quantity || ''}
              onChange={(e) => handleQuantityChange(appliance.id, e.target.value)}
              className="w-full"
            />
          </div>
          <div className="col-span-3">
            <Input
              type="number"
              min="0"
              value={appliance.power || ''}
              onChange={(e) => handlePowerChange(appliance.id, e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

