import React from 'react';
import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card";
  import { Input } from "../components/ui/input";
  import { Label } from "../components/ui/label";
function Signup () {
    return(
        <>
        <div class=" flex flex-col items-center w-full h-screen">
        <div class=" items-center block lg:w-96 w-80  mt-10">
            <Card className="font-libre pt-4">
            <CardHeader>
                <CardTitle class="text-3xl font-bold">Sign Up</CardTitle>
                <CardDescription>enter your details</CardDescription>
            </CardHeader>
            <CardContent>
            <Label htmlFor="name">Your Name</Label>
                <Input type="name" placeholder="name"/>
                <br/>
                <Label htmlFor="email">Your email address</Label>
                <Input type="email" placeholder="email"/>
                <br/>
                <Label htmlFor="password">Your password</Label>
                <Input type="password" placeholder="password"/>
            </CardContent>
            <CardFooter>
            <Button className="w-full m-3 bg-white text-black" variant="outline">Create account</Button>
        
            </CardFooter>
            </Card>
        </div>
            </div>
        </>
    )
}
export default Signup;