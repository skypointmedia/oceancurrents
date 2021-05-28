import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [data, setData] = useState([])
    const endpoint = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(()=>{
        axios.get(endpoint)
        .then( res => {
            console.log(res)
            setData(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <div>
            <ul>
            {
            data.map(dataset => (
                <li key={dataset.id}>{dataset.title}</li>
            ))
            }
            </ul>
        </div>
    )
}

export default DataFetching