import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function BookingSeats() {
  return (
    <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-3 text-center space-y-2">
        <h1 className="text-3xl font-semibold">Book seats for your show</h1>
        <Card className="inline-block px-6 py-4">
          <CardContent className="p-0 space-y-1">
            <p className="text-sm text-muted-foreground">Date</p>
            <p className="text-xl font-bold">Artist</p>
            <p className="text-sm">Location</p>
            <p className="text-sm">Start - End</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="font-semibold">Selected seats</h2>
            <ul className="text-sm list-disc pl-4">
              <li>Row 2, Seat 13</li>
              <li>Row 2, Seat 13</li>
            </ul>
            <p className="text-xs text-muted-foreground">Your seats expire in 02:35</p>
            <Button variant="outline" size="sm">← Change Seats</Button>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-2">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="font-semibold">Please enter your details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Name" />
              <Input placeholder="Address" />
              <Input placeholder="ZIP Code" />
              <Input placeholder="City" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="at">Austria</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <p className="text-xs text-muted-foreground">
                By clicking "Book" you accept that you are not actually booking a ticket as this is a test project and not a real website.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-xs text-muted-foreground">Your ticket will be available immediately after booking.</p>
                <Button>Book</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
