import { api } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import { minutesToMilliseconds } from "../utils/millisecondsToMinutes";

export function useFetchInterests() {
    const fetchInterests = async () => {     
        const { data } = await api.get()
        return data
    }

    const {
        data: interests = {},
        isLoading: loading,
        isError,
        error,
    } = useQuery({
        queryKey: ['interests'],
        queryFn: fetchInterests,
        staleTime: minutesToMilliseconds(60)
    })

    return{
        interests,
        loading,
        error: isError ? error : null,
    }
}