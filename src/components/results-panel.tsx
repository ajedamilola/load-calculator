import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { batteryCapacities } from "../data/appliances"

interface ResultsPanelProps {
  totalLoad: number
  recommendedInverterRating: number
  backupTime: number
  onBatteryCapacityChange: (value: string) => void
}

export function ResultsPanel({
  totalLoad,
  recommendedInverterRating,
  backupTime,
  onBatteryCapacityChange,
}: ResultsPanelProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500">Your Total Load</h3>
          <p className="text-4xl font-bold text-blue-600">{totalLoad}</p>
          <p className="text-sm text-gray-500">Watts</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500">
            Recommended Inverter Rating
          </h3>
          <p className="text-4xl font-bold text-blue-600">
            {recommendedInverterRating}
          </p>
          <p className="text-sm text-gray-500">VA</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500">
            Estimate Your Battery Backup Time
          </h3>
          <div className="space-y-2">
            <label className="text-sm text-gray-500">
              Choose Battery Capacity
            </label>
            <Select onValueChange={onBatteryCapacityChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Battery Capacity" />
              </SelectTrigger>
              <SelectContent>
                {batteryCapacities.map((capacity) => (
                  <SelectItem key={capacity.id} value={capacity.value.toString()}>
                    {capacity.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">
              Your Available Battery Back Up Time
            </h3>
            <p className="text-4xl font-bold text-blue-600">{backupTime}</p>
            <p className="text-sm text-gray-500">Hours</p>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>Disclaimer: Backup time shown here is approximate.</p>
            <p>
              The Battery should be in fully charged condition to attain this backup
              time.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

