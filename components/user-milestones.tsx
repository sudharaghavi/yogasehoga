import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from 'lucide-react'

interface Milestone {
  title: string
  description: string
}

interface UserMilestonesProps {
  milestones: Milestone[]
}

export function UserMilestones({ milestones }: UserMilestonesProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md">
      <CardHeader className="flex flex-row items-center space-x-2 pb-2">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <CardTitle className="text-lg font-semibold">Your Milestones</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {milestones.map((milestone, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="h-2 w-2 mt-2 rounded-full bg-green-500" />
              <div>
                <h3 className="font-medium">{milestone.title}</h3>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

