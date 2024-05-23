

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Link } from 'react-router-dom';


const RegisterPage = () => {
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
                            <Input id="first-name" placeholder="Max" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                        <Button type="submit"
                            variant="secondary"
                            className="w-full">
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
