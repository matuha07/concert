import React from "react"
import { ShowCard } from "./show-card"
import { useShowStore } from "@/stores/show"
import { Skeleton } from "../ui/skeleton"
import Link from "next/link"


interface Props {
    className?: string

}

export const ShowList: React.FC<Props> = ({ className }) => {
    const { shows, isLoading } = useShowStore();
    
    return (
        <div className="grid grid-cols-4 gap-4 mt-4">
            {
                isLoading ? 
                [...new Array(10)].map((_, index) => <Skeleton 
                key={index}
                className="w-[250px] h-[250px]"/>)

                : shows.map((show) => <Link href={`booking/${show.id}`} key={show.id}><ShowCard show={show} /></Link> )
            }
        </div>
    )
}