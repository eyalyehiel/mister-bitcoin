import React from "react"
import { Sparklines,SparklinesLine } from "react-sparklines"

export function Chart({data}) {
    return (
        <Sparklines
            data={data}
            height={100}
        >
            <SparklinesLine color="red" />
        </Sparklines>
    )
}
