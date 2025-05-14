import React from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input";
import { useShowStore } from "@/stores/show"
import { Button } from "../ui/button";



interface Props {
    className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {

    const {locations, artists, filterShows } = useShowStore()
    const [artist, setArtist] = React.useState<string | null>(null)
    const [location, setLocation] = React.useState<string | null>(null)
    const [date, setDate] = React.useState<string | null>(null)
    
    const handleArtistChange = (value: string) => {
        setArtist(value)
        filterShows(value, location || "", date || "")
    }
    const handleLocationChange = (value: string) => {
        setLocation(value)
        filterShows(artist || "", value, date || "")
    }
    const handleDateChange = (value: string) => {
        setDate(value)
        filterShows(artist || "", location || "", value)
    }

    const handleReset = () => {
        setArtist(null)
        setLocation(null)
        setDate(null)
        filterShows("", "", "")
    }

    return (
        <>
            <Select onValueChange={handleArtistChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Artist" />
                </SelectTrigger>
                <SelectContent>
                    {artists.map((artist) => (
                        <SelectItem key={artist} value={artist}>
                            {artist}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select onValueChange={handleLocationChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                    {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                            {location}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            

            <Input type="date" onChange={(e) => handleDateChange(e.target.value)}></Input>
            {
                (artist || location || date) && <Button variant="destructive" onClick={(handleReset) => {
                    setArtist(null)
                    setLocation(null)
                    setDate(null)
                    filterShows("", "", "")
                }
                }>Clear</Button>
            }
        </>

    )
}