import React, { useEffect } from 'react'
import axios from 'axios'

export default function GetEmployees() {
    useEffect(() => {
        axios.get('https://api.1337co.de/v3/employees', {
            headers: {
                'Authorization': `${process.env.REACT_APP_API_KEY}`
            }
        })
            .then((res) => {
                console.log('we did it!', res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])
}
