import React from 'react'
import './style.css'
export default function Headline(props) {
    if (!props.data) {
        return 
    }
  return (
    <div className='cont my-2'>
    <ul>
        {props.data.slice(4, 7).map((item, i) => {
            return <div className='my-4'><li key={i} >
                <figure>
                    <img src={!item.urlToImage ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : item.urlToImage} style={{height:"12rem"}} alt="image"></img>
                </figure>
                <figcaption>
                    
                    <h5>{item.title}</h5>
                    {/* <p>{item.description}</p> */}
                </figcaption>
            </li>
            </div>
        })}
    </ul>
</div>
  )
}
