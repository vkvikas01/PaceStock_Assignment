import React from 'react'

export default function Mainnews(props) {
    if (!props.data) {
        return 
    }
    return (
        <div class="card" data-aos={"fade-up"} >
            <img src={props.data[0].urlToImage} class="card-img-top" alt="..." />
            <div class="card-body">
                <h3 class="card-title">{props.data[0].title}</h3>
                <h5 class="card-text">{props.data[0].description}</h5>
                
            </div>
        </div>
    )
}
