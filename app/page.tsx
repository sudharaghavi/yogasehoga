"use client"

import React, { useState, useEffect } from "react"
import { Clock, Heart, MapPin, User, Target, Activity, Compass, Box, UserCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CustomToggleGroup } from "@/components/custom-toggle-group"
import { Dropdown } from "@/components/dropdown"
import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/signup-form"
import { Slider } from "@radix-ui/react-slider"

export default function YogaRoutineBuilder() {
  const [preferences, setPreferences] = useState({
    timeOfDay: "",
    healthConditions: [],
    duration: 30,
    environment: "",
    experienceLevel: "",
    goals: [],
    intensity: "",
    focusAreas: [],
    equipment: [],
  })

  const [progress, setProgress] = useState(0)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  useEffect(() => {
    document.title = "YogaBuddy - Personalized Yoga Routines"
  }, [])

  const updatePreference = (key: string, value: any) => {
    setPreferences((prev) => ({ ...prev, [key]: value }))
    calculateProgress()
  }

  const calculateProgress = () => {
    const totalFields = Object.keys(preferences).length
    const filledFields = Object.values(preferences).filter((v) => {
      if (typeof v === 'string') return v !== ''
      if (Array.isArray(v)) return v.length !== 0
      if (typeof v === 'number') return true
      return false
    }).length
    setProgress((filledFields / totalFields) * 100)
  }

  return (
    <div className="min-h-screen bg-[#F8F3E9] text-[#3C2F2F] p-4">
      <header className="text-center mb-8 relative">
        <div className="absolute top-0 right-0 mt-4 mr-4 space-x-2">
          <Button variant="outline" size="sm" onClick={() => setShowLogin(true)}>
            <UserCircle2 className="mr-2 h-4 w-4" /> Log In
          </Button>
          <Button size="sm" onClick={() => setShowSignup(true)} className="bg-[#88A096] hover:bg-[#7A9286] text-white">
            Sign Up
          </Button>
        </div>
        <h1 className="text-3xl font-bold mb-2">YogaBuddy: Customize Your Routine</h1>
        <p className="text-lg mb-4">Personalized for your needs, mood, and goals.</p>
        <Progress value={progress} className="w-full max-w-md mx-auto" />
        <p className="text-lg italic text-gray-600 mt-4">
          "Yoga is not about touching your toes, it's about what you learn on the way down."
        </p>
      </header>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PreferenceCard
          icon={<Clock className="h-6 w-6" />}
          title="Time of Day"
          content={
            <Dropdown
              options={["Early Morning", "Morning", "Afternoon", "Evening", "Before Bed"]}
              value={preferences.timeOfDay}
              onChange={(value) => updatePreference("timeOfDay", value)}
              label="Select time"
            />
          }
        />

        <PreferenceCard
          icon={<Heart className="h-6 w-6" />}
          title="Health Conditions"
          content={
            <CustomToggleGroup
              options={["Back Pain", "Knee Issues", "Neck Pain", "Pregnancy", "Arthritis", "Post-Surgery", "Diabetic", "PCOD", "Thyroid"]}
              value={preferences.healthConditions}
              onChange={(value) => updatePreference("healthConditions", value)}
            />
          }
        />

        <PreferenceCard
          icon={<Clock className="h-6 w-6" />}
          title="Duration of Practice"
          content={
            <div className="flex items-center space-x-2">
              <Slider
                min={10}
                max={90}
                step={5}
                value={[preferences.duration]}
                onValueChange={(value) => updatePreference("duration", value[0])}
              />
              <span>{preferences.duration} min</span>
            </div>
          }
        />

        <PreferenceCard
          icon={<MapPin className="h-6 w-6" />}
          title="Environment"
          content={
            <Dropdown
              options={["At Work", "At Home", "Travelling"]}
              value={preferences.environment}
              onChange={(value) => updatePreference("environment", value)}
              label="Select environment"
            />
          }
        />

        <PreferenceCard
          icon={<User className="h-6 w-6" />}
          title="Experience Level"
          content={
            <Dropdown
              options={["Beginner", "Intermediate", "Advanced"]}
              value={preferences.experienceLevel}
              onChange={(value) => updatePreference("experienceLevel", value)}
              label="Select level"
            />
          }
        />

        <PreferenceCard
          icon={<Target className="h-6 w-6" />}
          title="Goals"
          content={
            <CustomToggleGroup
              options={["Stress Relief", "Weight Loss", "Improved Flexibility", "Strength Building", "Better Sleep", "Focus", "Spiritual Growth"]}
              value={preferences.goals}
              onChange={(value) => updatePreference("goals", value)}
            />
          }
        />

        <PreferenceCard
          icon={<Activity className="h-6 w-6" />}
          title="Intensity"
          content={
            <Dropdown
              options={["Gentle", "Moderate", "Intense"]}
              value={preferences.intensity}
              onChange={(value) => updatePreference("intensity", value)}
              label="Select intensity"
            />
          }
        />

        <PreferenceCard
          icon={<Compass className="h-6 w-6" />}
          title="Focus Areas"
          content={
            <CustomToggleGroup
              options={["Upper Body", "Lower Body", "Core", "Whole Body"]}
              value={preferences.focusAreas}
              onChange={(value) => updatePreference("focusAreas", value)}
            />
          }
        />

        <PreferenceCard
          icon={<Box className="h-6 w-6" />}
          title="Equipment"
          content={
            <CustomToggleGroup
              options={["Mat", "Blocks", "Strap", "None"]}
              value={preferences.equipment}
              onChange={(value) => updatePreference("equipment", value)}
            />
          }
        />
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-[#F8F3E9] p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button variant="outline" onClick={() => console.log(preferences)}>Save Routine</Button>
          <Button className="bg-[#88A096] hover:bg-[#7A9286] text-white" onClick={() => console.log("Generating routine...")}>
            Generate YogaBuddy Routine
          </Button>
          <Button variant="outline" onClick={() => console.log("Tracking progress...")}>Track Progress</Button>
        </div>
      </footer>

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <LoginForm />
          <Button className="absolute top-4 right-4 text-white" onClick={() => setShowLogin(false)}>Close</Button>
        </div>
      )}

      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <SignupForm />
          <Button className="absolute top-4 right-4 text-white" onClick={() => setShowSignup(false)}>Close</Button>
        </div>
      )}
    </div>
  )
}

function PreferenceCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) {
  return (
    <Card className="bg-white rounded-lg shadow-md">
      <CardHeader className="flex flex-row items-center space-x-2 pb-2">
        {icon}
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  )
}

