import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState , useEffect } from 'react'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    // console.log( " Auth Layout"+authStatus);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus , navigate , authentication])
    
    return loader ? <h1>Loader ...</h1>: <>{children}</>

}

