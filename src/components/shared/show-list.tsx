import React from "react"
import { ShowCard } from "./show-card"


interface Props {
    className?: string
}

export const ShowList: React.FC<Props> = ({ className }) => {
    return (
        <div className="grid grid-cols-4 gap-4 mt-4">
            {
                [...new Array(10)].map((_, index) => <ShowCard key={index} />)
            }
        </div>
    )
}