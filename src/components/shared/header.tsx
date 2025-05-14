import { cn } from "@/lib/utils";
import { Container } from "./container";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
        return (
        <div className={cn("bg-rose-800 p-2 text-zinc-300", className)}>
            <Container className="flex items-center justify-between">
                <div>
                    <Link href="/">EuroSkills Concerts</Link>
                </div>
                <div>
                    <span>Already booked?</span>
                    <Button asChild>
                        <Link href="/bookingpage"> Get tickets</Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}