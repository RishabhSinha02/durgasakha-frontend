"use client";
import { useParams } from "next/navigation";

const PastEventDetailPage = () => {
    const { id } = useParams();
    return (
        <div>
        <h1>Past Trek Detail Page {id}</h1>
        </div>
    );
};

export default PastEventDetailPage;