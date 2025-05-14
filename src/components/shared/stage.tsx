import { cn } from "@/lib/utils"
interface Props {
    className?: string
}

export const Stage: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("w-full h-[300px] bg-white-200", className)}>
            <div className="flex-1 border rounded-xl p-4">
                <div className="text-center mb-4">
                    <div className="bg-green-200 py-2 px-4 rounded-md inline-block font-semibold">Stage</div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    {["Stall 01", "Stall 02", "Stall 03", "Terrace 01"].map((row, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-20 text-right pr-2 text-sm">{row}</div>
                            {Array.from({ length: 10 }).map((_, j) => (
                                <div
                                    key={j}
                                    className="w-5 h-5 border rounded-full bg-white"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}