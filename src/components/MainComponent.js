import { Link } from "react-router-dom";

function MainComponent() {
    return (
            <>
                <div>
                    <h1>Main</h1>
                    <Link to={"/1"}>Next 01</Link>
                </div>
            </>
    )
}

export default MainComponent