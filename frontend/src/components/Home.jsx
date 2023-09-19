import './home.css'
const React = require('react')


function Board() {
    return <div className="rectangle">
    </div> }

function Home () {
    return(
            <main>
                <h1>Home Page</h1>
                <Board></Board>
            </main>

    )
}

export default Home;