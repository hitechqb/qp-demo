import {Link} from "react-router-dom";

function Child02() {
    return (
        <>
            <h1>Child 02</h1>
            <Link to={"/1"}>Back 01</Link>
        </>
    )
}

export default Child02