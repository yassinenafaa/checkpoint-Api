import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({ user }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.username}</Card.Text>
                    <Card.Text>{user.email}</Card.Text>

                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>




        </div>
    )
}

export default UserCard