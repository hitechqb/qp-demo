import {Link} from "react-router-dom";

function Child01() {
    return (
        <>
            <h1>Child 01</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                 <Link to={"/"}>Back</Link> | {" "}
                <Link to={"/2"}>Next 02</Link>
            </nav>
        </>
    )
}

export default Child01