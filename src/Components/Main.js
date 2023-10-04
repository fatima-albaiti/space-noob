import { Button } from "react-bootstrap";

function Main() {
    return (
        <div className="section">
            <div className="home main">
                <h1>
                    Diary of a Space Noob
                </h1>
                <p>
                    Join me on my journey to learn more about space and stargazing
                </p>

                <p className="subtext">Let's look at the moon together</p>
                <a href={"#moon-phase"}><Button className="button-primary">Shall we?</Button></a>
            </div>
        </div>
    )
}

export default Main;