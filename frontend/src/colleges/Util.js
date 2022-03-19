import React from "react";
import { useSearchContext } from "@sajari/react-hooks";
import {
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

const Util = React.memo(() => {
    const { searched } = useSearchContext();
    return (
        <>
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
                        <ResultsPerPage size="sm" options={[10, 15, 20, 25]} />
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

export default Util;
