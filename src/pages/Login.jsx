import  React   from "react";
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
  import { Link } from "react-router-dom";



const Login = () => {

    return(
        <div class=" flex flex-col items-center w-full h-screen">
        <div class=" items-center block lg:w-96 w-80 mt-10">
            <Card className="font-libre pt-4">
            <CardHeader>
                <CardTitle class="text-3xl font-bold">Login</CardTitle>
                <CardDescription>enter your email & password</CardDescription>
            </CardHeader>
            <CardContent>
                <Label htmlFor="email">Your email address</Label>
                <Input type="email" placeholder="email"/>
                <br/>
                <Label htmlFor="password">Your password</Label>
                <Input type="password" placeholder="password"/>
            </CardContent>
            <CardFooter className="flex flex-col justify-center">
            <Button className="w-full m-3 bg-white text-black hover:bg-black hover:text-white ">Login</Button>
            <Link to="/SignUp" className="w-full flex justify-center">
                <Button className="w-full m-3 hover:bg-black hover:text-white bg-white text-black">Sign Up</Button></Link>
            </CardFooter>
            </Card>
        </div>
            </div>
    );
}
export default Login;