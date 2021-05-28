import React, {useState} from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import Map from './Map'


export default function Dashboard() {

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    
    //Handle Logout
    async function handleLogOut(){
        setError('')        
        try {
            await logout()
            history.push('/login')
        }catch{
            setError('Failed to logout')
        }
    }

    return (
        <>
            {/* <Card>  
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert varient="danger">{error}</Alert>}
                    <strong>Email:</strong>{currentUser.email}
                   
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
            <Button varient="link" onClick={handleLogOut}>Log out</Button>
            </div> */}
            
            <Map/>
        </>
    ) 
}