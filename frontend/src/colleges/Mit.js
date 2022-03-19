import React from "react";

import { FilterBuilder, SearchProvider } from "@sajari/react-search-ui";

import { Pipeline } from "@sajari/react-hooks";
import Util from "./Util";

const researchFilter = new FilterBuilder({
    title: "Research Area",
    name: "Research Area",
    type: "list",
    multi: true,
    format: "default",
    array: false,
    sort: "none",
    hideCount: true,
    options: {
        "Aerospace Engineering": "boost ~ 50",
        "Bio Engineering": "boost ~ 50",
        "Civil & Environmental Engineering": "boost ~ 50",
        "Computer Science": "boost = 50",
        "Electrical Engineering": "boost ~ 50",
        "Industrial & Enterprise Systems": "boost ~ 50",
        "Material Science & Engineering": "boost ~ 50",
        "Mechanical Science & Engineering": "boost ~ 50",
        "Nuclear, Plasma and Radiological Engineering": "boost ~ 50",
    },
});

const researchFieldFilter = new FilterBuilder({
    title: "Fields of Research",
    name: "Fields of Research",
    type: "select",
    multi: true,
    format: "default",
    array: false,
    sort: "none",
    hideCount: true,
    options: {
        "Architecture, Compilers, and Parallel Computing": "boost ~ 40",
    },
});

const pipeline = new Pipeline(
    {
        account: "1645718176734614379",
        collection: "mit",
    },
    "website"
);

const Ucui = () => {
    return (
        <>
            <SearchProvider
                search={{
                    pipeline,
                    filters: [researchFilter, researchFieldFilter],
                }}
                searchOnLoad
            >
                <Util />
            </SearchProvider>
        </>
    );
};

export default Ucui;
