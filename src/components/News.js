import React from 'react'
import Mainnews from './Mainnews'
import Headline from './Headline/Headline'
export default function News(props) {
    if (props.data && (props.data.code === "ERR_NETWORK")) {
        return <h3>{props.data.message}</h3>
    }
    return (
        <>
         <hr style={{border: "2px solid black",
                    opacity: "1.25"}} />
        <h2 className="text-left my-3">Featured Artikel</h2><div className="row">

            <div className="col-sm-6">
                <div className="card">
                    <Mainnews data={props.data} />
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <Headline data={props.data} />
                </div>
            </div>
        </div></>
    )
}
