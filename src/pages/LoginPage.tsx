
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/http/api"
import { useMutation } from "@tanstack/react-query"
import { LoaderCircle } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const LoginPage = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const mutation = useMutation({
        mutationFn: login,
        onSuccess: () => {
            console.log("login success")
            navigate('/dashboard/home')
        }
    })

    const UserLogin = () => {
        console.log("login: ", email, password)

        if (!email || !password) {
            return alert("Please Provide credentials properly")
        }

        mutation.mutate({ email, password })
        console.log("submit")
    }


    return (

        <section className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-sm">

                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account.
                    </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-4">

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            // onChange={userDetails}
                            onChange={(e) => { setEmail(e.target.value) }}
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={email}
                            required />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            // onChange={userDetails}
                            onChange={(e) => { setPassword(e.target.value) }}
                            id="password"
                            type="password"
                            value={password}
                            required />
                    </div>

                    <CardFooter>
                        <Button
                            onClick={UserLogin}
                            className="w-full"
                            disabled={mutation.isPending}
                        >
                            {mutation.isPending && <LoaderCircle className="animate-spin" />}
                            <span> Sign in</span>
                        </Button>
                    </CardFooter>

                    <div className="mt-4 text-center text-sm">
                        Don't have an account, Please{" "}
                        <Link
                            to="/auth/register"
                            className="underline">
                            Sign up
                        </Link>
                        {" "}First
                    </div>

                </CardContent>
            </Card>
        </section>

    )
}

export default LoginPage
