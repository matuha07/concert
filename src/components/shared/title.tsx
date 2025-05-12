import { cn } from "@/lib/utils";
import React from "react";



interface Props {
    className?: string;
    children?: React.ReactNode; 
}

export const Title:React.FC<Props> = ({ className, children }) => {
    return (
        <div className={cn("text-2xl font-bold text-center", className)}>
            { children }
        </div>
    )
}