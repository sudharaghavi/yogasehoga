import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login submitted', { email, password })
    // Here you would typically handle the login logic
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login to YogaBuddy</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                placeholder="Enter your email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                placeholder="Enter your password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Button className="w-full bg-[#88A096] hover:bg-[#7A9286] text-white" onClick={handleSubmit}>Login</Button>
        <Button variant="link" className="mt-2 p-0">Forgot Password?</Button>
      </CardFooter>
    </Card>
  )
}

