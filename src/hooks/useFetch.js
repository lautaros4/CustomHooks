import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const {data, isLoading, error} = state

    const fetchData = async (url, method, bodyData = null) => {
        if (!url) return
        try {

            const options = {
                method: method,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                body: method == 'GET' || method == 'Delete' ? null : JSON.stringify(bodyData)
            }
            const res = await fetch(url, options)
            const data = await res.json()
            setstate({
                data,
                isLoading: false,
                error: null
            })
        }
        catch (error) {
            setstate({
                data:null,
                error: null,
                isLoading: false
            })

        }

    }

    // useEffect(() => {
        // fetchData()
    // }, [url])


    return {
        data,
        isLoading,
        error,
        fetchData
    }
}
