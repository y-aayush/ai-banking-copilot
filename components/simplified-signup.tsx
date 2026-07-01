
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, ArrowLeft, User, Mail, Phone, Lock, Calendar, MapPin } from "lucide-react"

export function SimplifiedSignup() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const next = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) setStep(step + 1)
    else setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto shadow-2xl rounded-3xl">
        <CardContent className="py-14 text-center">
          <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white"/>
          </div>
          <h2 className="text-3xl font-bold mb-3">Registration Successful!</h2>
          <p className="text-gray-600 mb-8">
            Your account request has been submitted successfully.
            You can now log in to access your AI Banking Portal.
          </p>
<div className="space-y-3">
  <Button
    variant="outline"
    className="w-full border-black text-black hover:bg-black hover:text-white"
    onClick={() => window.location.href = "/"}
  >
    Back to Home
  </Button>
</div>
        </CardContent>
      </Card>
    )
  }

  return (
<Card className="max-w-2xl mx-auto rounded-3xl shadow-2xl border border-gray-200 overflow-hidden bg-white">      <div className="bg-black text-white p-6">
        <h2 className="text-2xl !text-white font-bold">Create Your Bank Account</h2>
        <p className="opacity-90 mt-1">Secure online registration</p>
        <div className="flex gap-2 mt-5">
          {[1,2,3].map(i=>(
            <div key={i} className={`h-2 flex-1 rounded-full ${i<=step?"bg-white":"bg-gray-600"}`}/>
          ))}
        </div>
      </div>

      {step===1 && (
        <form onSubmit={next}>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Tell us about yourself.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field icon={<User size={18}/>} label="Full Name" placeholder="Aayush Yadav"/>
            <Field icon={<Calendar size={18}/>} label="Date of Birth" type="date"/>
            <Field icon={<User size={18}/>} label="Citizenship / National ID" placeholder="12-34-56-12345"/>
            <div>
              <label className="text-sm font-medium">Account Type</label>
              <select className="mt-1 w-full border rounded-xl px-4 py-3">
                <option>Savings Account</option>
                <option>Current Account</option>
                <option>Student Account</option>
              </select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-black hover:bg-gray-800 text-white">Continue <ArrowRight className="ml-2 h-4 w-4"/></Button>
          </CardFooter>
        </form>
      )}

      {step===2 && (
        <form onSubmit={next}>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>How can we reach you?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field icon={<Mail size={18}/>} label="Email Address" type="email" placeholder="aayush@email.com"/>
            <Field icon={<Phone size={18}/>} label="Mobile Number" placeholder="+977 98XXXXXXXX"/>
            <Field icon={<MapPin size={18}/>} label="Residential Address" placeholder="Street, City"/>
            <Field icon={<MapPin size={18}/>} label="City" placeholder="Kathmandu"/>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={()=>setStep(1)}><ArrowLeft className="mr-2 h-4 w-4"/>Back</Button>
            <Button className="bg-black hover:bg-gray-800 text-white">Continue <ArrowRight className="ml-2 h-4 w-4"/></Button>
          </CardFooter>
        </form>
      )}

      {step===3 && (
        <form onSubmit={next}>
          <CardHeader>
            <CardTitle>Online Banking Login</CardTitle>
            <CardDescription>Create your secure credentials.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field icon={<User size={18}/>} label="Username" placeholder="Choose username"/>
            <Field icon={<Lock size={18}/>} label="Password" type="password"/>
            <Field icon={<Lock size={18}/>} label="Confirm Password" type="password"/>
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-1"/>
              I agree to the Terms & Conditions and Privacy Policy.
            </label>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={()=>setStep(2)}><ArrowLeft className="mr-2 h-4 w-4"/>Back</Button>
            <Button className="bg-black hover:bg-gray-800 text-white">Create Account</Button>
          </CardFooter>
        </form>
      )}
    </Card>
  )
}

function Field({
  label,
  icon,
  placeholder="",
  type="text"
}:{
  label:string
  icon:React.ReactNode
  placeholder?:string
  type?:string
}){
  return(
    <div>
      <label className="text-sm font-medium">{label}</label>
      <div className="mt-1 flex items-center border rounded-xl px-3 py-3 gap-3 focus-within:ring-2 focus-within:ring-black">
        <div className="text-black">{icon}</div>
        <input type={type} placeholder={placeholder} className="flex-1 outline-none bg-transparent"/>
      </div>
    </div>
  )
}
