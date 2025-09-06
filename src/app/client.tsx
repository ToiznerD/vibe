"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

const Client = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.hello.queryOptions({ text: "dor" }));
    console.log(data);
    return ( 
        <div>
            {data?.greeting}
        </div>
     );
}
 
export default Client;