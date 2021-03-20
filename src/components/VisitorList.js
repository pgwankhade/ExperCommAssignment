import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import {useState, useEffect} from 'react'


const VisitorList = () => {
    const [visitor, setVisitor] = useState(null)
    useEffect(()=>{
        const data = localStorage.getItem('visitordata')
        setVisitor(JSON.parse(data))
    },[])
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}}>
            <h1 className="titlenews">Visitor List</h1>
            <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
            {visitor?visitor.map((data)=>
            <Card style={{ width: '18rem', margin:"10px" }}>
                <Card.Img variant="top" src={data.image} style={{objectFit:"cover"}} height="180" width="180"/>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Email : {data.email}</ListGroupItem>
                    <ListGroupItem>Person to visit : {data.person}</ListGroupItem>
                    <ListGroupItem>Date : {data.date}</ListGroupItem>
                    <ListGroupItem>Type of Entry : {data.typeofentry}</ListGroupItem>
                    <ListGroupItem>Time of Entry : {data.timeEntry}</ListGroupItem>
                    <ListGroupItem>Time of Exit : {data.timeExit}</ListGroupItem>
                </ListGroup>
            </Card> 
        ):<h1>no visitor to show</h1>
        }
        </div>
            
        </div>
    )
}

export default VisitorList