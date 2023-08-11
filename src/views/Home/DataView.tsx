import React from "react";
import DataList from "@/components/DataList";

export default function DataView() {

    return <div className="mt-120 container mx-auto flex justify-between">
        <DataList />
        <DataList />
    </div>
}