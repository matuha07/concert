"use client"
import { useShowStore } from "@/stores/show"
import { useParams } from "next/navigation";
import { ShowCard } from "@/components/shared/show-card";
import { Stage } from "@/components/shared/stage";
import { SelectedSeats } from "@/components/shared/selectedseats";
import { useRowsStore } from "@/stores/rows";




export default function BookingPage() {
  

  const { id } = useParams<{ id: string }>()
  const { getShowById } = useShowStore()
  const show = getShowById(Number(id))



  const { rows, fetchRows, isLoading } = useRowsStore();

  if (!show) {
    return <div>Show not found</div>
  }

  const concertId = show.concertId;
  const showId = show.id;

  return (
    <>
      <div className="p-6 max-w-[1200px] mx-auto">

        <div className="text-center mt-10">
          <h2 className="text-xl font-medium">Book seats for your show</h2>
          <ShowCard show={show} className="mx-auto mt-4 max-w-[400px]" />
        </div>

        <div className="flex gap-10 mt-10">
          <Stage concertId={concertId} showId={showId}  />          <SelectedSeats />
        </div>
      </div>
    </>

  )
}