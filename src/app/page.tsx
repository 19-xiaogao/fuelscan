import React from "react";
import Header from "@/views/Home/Header";
import Search from "@/views/Home/Search";
import DataView from "@/views/Home/DataView";
import Footer from "@/components/Footer";

export default async function Home() {

    return <main>
        <Header />
        <Search />
        <DataView />
        <Footer />
    </main>
}