import React from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Show } from "@/@types/show";


interface Props {
    className?: string
    show: Show;
}

export const ShowCard: React.FC<Props> = ({ className, show }) => {
    return (
        <>
            <Card className={cn(className)}>
                <CardContent className="text-center">
                    <p>{show.date}</p>
                    <CardTitle className="py-2 text-xl">{show.artist}</CardTitle>
                    <p>{show.location}</p>
                    <p className="mt-6">{show.start} - {show.end}</p>
                </CardContent>
            </Card>
        </>
    )
}