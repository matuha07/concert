import { cn } from "@/lib/utils"
import { Card, CardTitle, CardContent } from "../ui/card"
import Link from "next/link"
import { Button } from "../ui/button"

interface Props {
    className?: string
}


export const SelectedSeats: React.FC<Props> = ({ className }) => {
    return (
        <>
            <Card className="w-64">
                <CardContent className="py-4 px-6">
                    <CardTitle className="mb-2 text-lg">Selected seats</CardTitle>
                    <ul className="text-sm mb-4">
                        <li>Row: Stall 03, Seat: 6</li>
                        <li>Row: Stall 03, Seat: 7</li>
                    </ul>
                    <p className="text-xs mb-4">Your seats expire in 0:25</p>
                    <Button className="" asChild>
                        <Link href="/">Enter Booking Details</Link>
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}