"use client";

import { useParams } from "next/navigation"

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
    const params = useParams();
    console.log(params);
    return <div>
        {params.dynamic}
    </div>
}