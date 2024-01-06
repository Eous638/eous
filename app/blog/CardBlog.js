import React from "react";

export default function CardBlog(props) {
    return(
        <div style={{paddingTop:'4rem', paddingBottom:'4rem', display:'flex', flexDirection:'row', paddingInline:'5rem', height:'26rem',borderBottom:'1.5px solid #B026FF', backgroundColor:'#242323'}}>
        <img src={props.img} style={{borderRadius:'7px'}}></img>
        <div style={{marginLeft:'3rem'}}>
        <h1 style={{fontSize:'3rem'}}>{props.title}</h1>
        <p style={{fontSize:'1.6rem'}}>{props.text}</p>
        </div>
        </div>
    )
}