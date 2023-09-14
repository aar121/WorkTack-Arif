const React = require('react')

function Def(html) {
    return(
        <html>
            <head>
                <title>{html.title || "WorkTack"}</title>
                <link rel="stylesheet" href="/main.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href ="/places/add">Add a Job</a>
                        </li>
                        <li>
                            <a href="/places/more">More Jobs</a>
                        </li>
                        <li>
                            <a href="/places/about">About Us</a>
                        </li>
                    </ul>
                </nav>
            </body>
        </html>
    )
}