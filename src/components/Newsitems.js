
import React from 'react'

export default function Newsitems(props) {
    if (!props.data) {
        return 
    }
    return (
        <div>
             <hr style={{border: "2px solid black",
                    opacity: "1.25"}} />
            <h2 className="text-left my-3">artikel terbaru</h2>
            
            <div class="card" >
            
            <div className='row'>
                {props.data.slice(10, 16).map((item, i) => {
                    return <div className='col-lg-4 col-md-6 col-sm-12' key={i}>
                        <div className='content-box' >
                            <img src={item.urlToImage} style={{height:"12x"}}  class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-left">{item.title}</h5>
                                <p class="card-text text-left">{item.description}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            </div>
        </div>
    )
}
