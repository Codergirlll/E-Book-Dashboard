

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react"
import { useMutation } from '@tanstack/react-query';
import { register } from '../http/api';
import { LoaderCircle } from 'lucide-react';



const RegisterPage = () => {

    const navigate = useNavigate()
    const [name, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const mutation = useMutation({
        mutationFn: register,
        onSuccess: () => {
            navigate("/auth/login")
        }
    })

    const UserRegister = () => {

        if (!name || !email || !password) {
            return alert("Please Provide all Infos")
        }

        mutation.mutate({
            name, email, password
        })
        console.log("User resister successfully")
    }


    return (

        <section className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">Name</Label>
                            <Input
                                onChange={(e) => { setUsername(e.target.value) }}
                                id="first-name"
                                placeholder="Max"
                                required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                onChange={(e) => { setEmail(e.target.value) }}
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                type="password" />
                        </div>
                        <Button
                            onClick={UserRegister}
                            type="submit"
                            variant="secondary"
                            className="w-full"
                            disabled={mutation.isPending}>
                            {mutation.isPending && <LoaderCircle className="animate-spin" />}

                            <Link to="/auth/login" className="underline">
                                Create an account
                            </Link>
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        If you already have an account? Please{" "}
                        <Link to="/auth/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </section>

    )
}

export default RegisterPage
