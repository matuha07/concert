import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 

export default function TicketRetrieval() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">

        <h1 className="text-2xl font-semibold text-center mb-6">
          Retrieve your tickets.
        </h1>


        <Card>
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Code</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Enter your code"
                />
              </div>
              <Button type="submit" className="w-full mt-4">
                Get Ticket
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}