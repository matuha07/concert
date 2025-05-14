import { Button } from "@/components/ui/button"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 

export default function TicketConfirmation() {
  return (
    <div className="min-h-scree flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          YOUR TICKETS ARE READY!
        </h1>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Your Details</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div>
              <p className="font-semibold">Name</p>
              <p>xxxx xxxx</p>
            </div>
            <div>
              <p className="font-semibold">Booked on</p>
              <p>dd/mm/yyyy</p>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-semibold">Row: 2</p>
                  <p>Seat: 13</p>
                </div>
                <div>
                  <p className="font-semibold">Code: VKBW5D3FEK</p>
                </div>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <p className="font-semibold">Date</p>
                <p>Artist</p>
                <p>Location</p>
                <p className="mt-2">Start - End</p>
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Cancel Ticket
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-semibold">Row: 2</p>
                  <p>Seat: 14</p>
                </div>
                <div>
                  <p className="font-semibold">Code: 0HCZ3FADYE</p>
                </div>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <p className="font-semibold">Date</p>
                <p>Artist</p>
                <p>Location</p>
                <p className="mt-2">Start - End</p>
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Cancel Ticket
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}