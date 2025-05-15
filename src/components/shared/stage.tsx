"use client"
import { cn } from "@/lib/utils";
import { Row } from "@/@types/row";
import { useRowsStore } from "@/stores/rows";
import { useEffect } from "react";

interface Props {
    className?: string;
    concertId: number;
    showId: number;
}

export const Stage: React.FC<Props> = ({ className, concertId, showId }) => {
    const { rows, fetchRows, isLoading } = useRowsStore();

    useEffect(() => {
        fetchRows(concertId, showId).catch(console.error);
    }, [concertId, showId]);

    return (
        <div className={cn("w-full h-[300px] bg-white-200", className)}>
            <div className="flex-1 border rounded-xl p-4">
                <div className="text-center mb-4">
                    <div className="bg-green-200 py-2 px-4 rounded-md inline-block font-semibold">Stage</div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        rows.map((row) => (
                            <div key={row.id} className="flex items-center gap-2">
                                <div className="w-20 text-right pr-2 text-sm">{row.name}</div>
                                {Array.from({ length: row.seats.total }).map((_, index) => {
                                    const seatNumber = index + 1;
                                    const isUnavailable = row.seats.unavailable.includes(seatNumber);
                                    return (
                                        <div
                                            key={seatNumber}
                                            className={cn(
                                                "w-5 h-5 border rounded-full",
                                                isUnavailable ? "bg-red-500" : "bg-white"
                                            )}
                                        />
                                    );
                                })}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
