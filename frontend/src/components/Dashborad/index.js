import React from "react";

const Dashborad = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <form action="submit">
                <p>
                    Name: <input type="text" />
                </p>
                <p>
                    Email: <input type="text" />
                </p>
                <p>
                    Current College: <input type="text" />
                </p>
                <p>
                    Applying For: <input type="text" />
                </p>
                <button>Submit</button>
            </form>
        </>
    );
};

export default Dashborad;
