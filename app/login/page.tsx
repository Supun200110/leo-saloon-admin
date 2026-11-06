"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    

    return (
        <div className="h-screen flex justify-center items-center">
            <Card className="w-[400px]">
                <CardHeader>
                   <CardTitle className="text-center">Login To Saloon Leo Admin</CardTitle>
                </CardHeader>
                <CardContent>
                    <div >
                        <Label className="mb-2">Email</Label>
                        <Input
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                         type="email" placeholder="Enter Your Email"></Input>
                        <Label className="my-2">Passowrd</Label>
                        <Input
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                         type="password" placeholder="Enter Your Password"></Input>
                        <Button
                        onClick={
                            ()=>{
                                toast.success(email+"    "+ password)
                            }
                        }
                         className="mt-4 w-full">Login</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

