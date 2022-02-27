import React, { useState } from "react";
import {
    FieldDictionary,
    FilterBuilder,
    Filter,
    Input,
    Pagination,
    Results,
    ResultsPerPage,
    SearchProvider,
    Sorting,
    Summary,
    ViewType,
} from "@sajari/react-search-ui";

import { Select, Option, Button } from "@sajari/react-components";
import "./Search.css";

import {
    Pipeline,
    useSearch,
    RangeFilterBuilder,
    useSearchContext,
} from "@sajari/react-hooks";

function Search() {
    const pipeline = new Pipeline(
        {
            account: "1645718176734614379",
            collection: "hello-world",
        },
        "website"
    );

    // const fields = new FieldDictionary({
    //     title: "name",
    //     subtitle: (data) =>
    //         data.level4 ||
    //         data.level3 ||
    //         data.level2 ||
    //         data.level1 ||
    //         data.brand,
    // });
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
            Physics: "boost ~ 50",
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

    const App = React.memo(() => {
        const { searched } = useSearchContext();
        const [data, setData] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();
            setData(new URLSearchParams(new FormData(event.target)).toString());
        };
        return (
            <>
                <div className="college-selector">
                    <div className="form-container">
                        <form
                            onSubmit={handleSubmit}
                            className="flex space-x-4"
                        >
                            <Select multiple name="options" className="flex-1">
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                            </Select>
                            <div className="submit-button">
                                <Button type="submit" appearance="primary">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-5 p-4 rounded-t-md border border-b-0 border-gray-200 bg-color">
                    <div className="input-container">
                        <div className="input">
                            <Input />
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-3">
                        <Summary size="sm" />

                        <div className="flex space-x-4 ml-auto">
                            <Sorting
                                options={[
                                    {
                                        name: "Most relevant",
                                        value: "",
                                    },
                                    {
                                        name: "Alphabetical: A to Z",
                                        value: "title",
                                    },
                                    {
                                        name: "Alphabetical: Z to A",
                                        value: "-title",
                                    },
                                    {
                                        name: "Date: Oldest to Newest",
                                        value: "created_at",
                                    },
                                    {
                                        name: "Date: Newest to Oldest",
                                        value: "-created_at",
                                    },
                                ]}
                                size="sm"
                            />
                            <ResultsPerPage size="sm" />
                            <ViewType size="sm" />
                        </div>
                    </div>

                    <div className="flex mt-6">
                        {searched && (
                            <div className="w-1/4 pr-4 border-gray-100 border-r space-y-6">
                                <Filter
                                    type="list"
                                    name="Research Area"
                                    title="Research Area"
                                    multi="true"
                                    format="default"
                                    array="false"
                                    sort="none"
                                    hideCount="true"
                                    options={{
                                        "Aerospace Engineering": "boost ~ 50",
                                        "Bio Engineering": "boost ~ 50",
                                        "Civil & Environmental Engineering":
                                            "boost ~ 50",
                                        "Computer Science": "boost = 50",
                                        "Electrical Engineering": "boost ~ 50",
                                        "Industrial & Enterprise Systems":
                                            "boost ~ 50",
                                        "Material Science & Engineering":
                                            "boost ~ 50",
                                        "Mechanical Science & Engineering":
                                            "boost ~ 50",
                                        "Nuclear, Plasma and Radiological Engineering":
                                            "boost ~ 50",
                                        Physics: "boost ~ 50",
                                    }}
                                    searchable
                                />
                            </div>
                        )}

                        <div className="flex-1 pl-4">
                            <Results />
                        </div>
                    </div>

                    <div className="sticky bottom-0 p-6">
                        <Pagination />
                    </div>
                </div>
            </>
        );
    });

    return (
        <SearchProvider
            search={{
                pipeline,
                filters: [researchFilter, researchFieldFilter],
            }}
            searchOnLoad
        >
            <App />
        </SearchProvider>
    );
}

export default Search;
