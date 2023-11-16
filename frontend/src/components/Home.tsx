import React, { FC } from 'react';
import './home.css';
// @ts-ignore
import Card from 'react-bootstrap/Card';

interface BulletinStyle {
  width: string;
  height: string;
}

const bulletin: BulletinStyle = {
  width: '90%',
  height: '60vh'
}

const cardColors: string[] = ['#ffbd00', '#ff7900', '#ff0054', '#9e0059', '#7371fc', '#F94144','#43AA8B']

function getRandomColor(): string {
  const randomIndex: number = Math.floor(Math.random() * cardColors.length);
  return cardColors[randomIndex];
}

function getRandomPosition(): { left: string, top: string } {
  const minX: number = 0;
  const maxX: number = window.innerWidth - 200;
  const minY: number = 0;
  const maxY: number = window.innerHeight - 200;

  const randomX: number = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  console.log(`x=${randomX}`)
  const randomY: number = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

  return {
    left: `${randomX}px`,
    top: `${randomY}px`
  }
}

const JobCard: FC = () => {
  const cardStyle = {
    width: '12rem',
    height: '10rem',
    position: 'relative',
    ...getRandomPosition(),
    backgroundColor: getRandomColor(),
  }
  return (
    <Card className="card" style={cardStyle}>
      <Card.Body>
        <Card.Title>Now Hiring!</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod aliqua.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const Home: FC = () => {
  return (
    <main className='home'>
      <h1 className='h1'>Work Tack</h1>
      <div className="board">
        <JobCard></JobCard>
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