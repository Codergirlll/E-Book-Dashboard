
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { CirclePlus, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useQuery } from "@tanstack/react-query"
import { getBooks } from "@/http/api"
import { Book } from "@/type"
import { Link } from "react-router-dom"



const BooksPage = () => {

    const {
        data,
        // isPending,
        // isError

    } = useQuery({
        queryKey: ['Books'],
        queryFn: getBooks,
        staleTime: 10000
    })

    console.log("data: ", data)

    return (
        <div>
            <div className="flex items-center justify-between">
                {/* For Bread crumbs */}
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard/home">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Books</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <Link to={"/dashboard/add/book"}>
                    <Button>
                        <CirclePlus size={30} />
                        <span className="ml-2">Add book</span>
                        {/* Add Book */}
                    </Button>
                </Link>

            </div>


            {/* For table Data */}
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Books</CardTitle>
                    <CardDescription>
                        Manage your books and view their sales performance.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    <span className="sr-only">Image</span>
                                </TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Genre</TableHead>
                                <TableHead className="hidden md:table-cell"> Author </TableHead>
                                <TableHead className="hidden md:table-cell"> Created At </TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {/* For filling row for data */}
                            {data?.data.books.map((book: Book) => {
                                return (
                                    <TableRow key={book._id}>
                                        <TableCell className="hidden sm:table-cell">
                                            <img
                                                alt={book.title}
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src={book.coverImage}
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {book.title}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">
                                                {book.genre}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {book.author}
                                            {/* {book.author._id} */}
                                        </TableCell>

                                        <TableCell className="hidden md:table-cell">
                                            {book.createdAt}
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        aria-haspopup="true"
                                                        size="icon"
                                                        variant="ghost"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Toggle menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        products
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default BooksPage
