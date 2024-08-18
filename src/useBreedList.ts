import { useQuery } from "@tanstack/react-query"
import fetchBreedList from "./fetchBreedsList"


export default function useBreedList (animal: string) {
    const results = useQuery(['breeds', animal], fetchBreedList)
    return [results.data?.breeds ?? [], results.status] as const
}