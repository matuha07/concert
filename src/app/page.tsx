"use client"
import { Filters } from "@/components/shared/filters";
import { Title } from "@/components/shared/title";
import { ShowCard } from "@/components/shared/show-card";
import { ShowList } from "@/components/shared/show-list";
import { useShowStore } from "@/stores/show";
import { useEffect } from "react";


export default function Home() {

  const fetchShows = useShowStore((store) => store.fetchShows)
  useEffect(() => {
    fetchShows();
  }, [])

  return (
    <div>
      <Title>Checkout these amazing concerts in Graz.</Title>
      <div className="flex gap-4 mt-4">
        <Filters></Filters>
      </div>
      <ShowList></ShowList>

    </div>


  )
}