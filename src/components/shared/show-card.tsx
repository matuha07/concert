import React from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";


interface Props {
    className?: string
}

export const ShowCard: React.FC<Props> = ({ className }) => {
    return (
        <>
            <Card className={cn(className)}>
                <CardContent className="text-center">
                    <p>12.05.2025</p>
                    <CardTitle className="py-2 text-xl">Artist</CardTitle>
                    <p>Location</p>
                    <p className="mt-6">18:00 - 21:00</p>
                </CardContent>
            </Card>
        </>
    )
}