import { useEffect, useState } from "react"

const BASE_URL = "https://api.yelp.com/v3/businesses/search?term=Toast&location=İstanbul&limit=50"

const useApiService = () => {

    const [result, setResult] = useState('')

    useEffect(()=>{
        fetch(BASE_URL,{
            method:'GET',
            headers:{
                Authorization : 'Bearer ZAz759Lq0d6unY53T6eQ0p2Od-HHnhbnSbS9kSYDCQPpQ0qZL10z8eTzS742zd9s9uTPaNBMYFLl1Nzq4okVAA9tN1Vk6NTLV59X9u_ere2yi0CnaZfkdMpSl5tcZXYx'
            }
        })
            .then((response) => response.json())
            .then((data) => setResult(data))
            .catch((err) => console.error(err))
    },[])

    return result;

}

export default useApiService;