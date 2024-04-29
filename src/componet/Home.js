import React from 'react'
import { Card } from 'react-bootstrap'
export default function Home() {
    const cardStyle = {
        width: '100vw', // 100% of the viewport width
        height: '100vh', // 100% of the viewport height
      };
  return (
    <div>
      <Card className="bg-dark text-white" style={cardStyle}>
        <Card.Img 
          src="/Imagess/image1.jpeg" 
          alt="Home image" 
          style={{ maxWidth: '100%', maxHeight: '100%' }} // Constrain image size
        />
        <Card.ImgOverlay>
          <Card.Title>Home page</Card.Title>
          <Card.Text>
            Purchaise all product fron ShaZZZ
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}
