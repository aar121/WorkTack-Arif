import './home.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const React = require('react')
const bulletin = {
    width: '90%',
    height: '60vh'
}

function getRandomPosition()
 {
    const minX = 0;
    const maxX = bulletin.innerWidth - 200;
    const minY = 0;
    const maxY = bulletin.innerHeight- 200;

    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) +minX;
    console.log(`x=${randomX}`)
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) +minY;

    return{
        left: `${randomX}px`,
        top: `${randomY}px`
    }
 }
function JobCard() {
    const cardStyle = {
        width: '12rem',
        height: '10rem',
        position: 'relative',
        ...getRandomPosition()
    }
  return (
    <Card className="card" style={cardStyle}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Now Hiring!</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod aliqua.
        </Card.Text>
        {/* <Button variant="primary">More</Button> */}
      </Card.Body>
    </Card>
  );
}


function Home () {
    return(
      
            <main className='home'>
               
                <h1>Work Tack</h1>
                <div className="board">
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                </div>
        
            </main>
            
    )
}

export default Home;