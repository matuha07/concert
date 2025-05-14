import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link";

export default function BookingPage() {


    return (
        <>
    <div className="p-6 max-w-[1200px] mx-auto">

      <div className="text-center mt-10">
        <h2 className="text-xl font-medium">Book seats for your show</h2>
        <Card className="mx-auto my-4 max-w-sm">
          <CardContent className="text-center py-6">
            <p className="font-bold text-lg">Artist</p>
            <p>Location</p>
            <p>Start - End</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-10 mt-10">
        <div className="flex-1 border rounded-xl p-4">
          <div className="text-center mb-4">
            <div className="bg-green-200 py-2 px-4 rounded-md inline-block font-semibold">Stage</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            {["Stall 01", "Stall 02", "Stall 03", "Terrace 01"].map((row, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-20 text-right pr-2 text-sm">{row}</div>
                {Array.from({ length: 10 }).map((_, j) => (
                  <div
                    key={j}
                    className="w-5 h-5 border rounded-full bg-white"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <Card className="w-64">
          <CardContent className="py-4 px-6">
            <CardTitle className="mb-2 text-lg">Selected seats</CardTitle>
            <ul className="text-sm mb-4">
              <li>Row: Stall 03, Seat: 6</li>
              <li>Row: Stall 03, Seat: 7</li>
            </ul>
            <p className="text-xs mb-4">Your seats expire in 0:25</p>
            <Button className="ml-4"  asChild>
              <Link href="/">Enter Booking Details</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
        </>

    )
}