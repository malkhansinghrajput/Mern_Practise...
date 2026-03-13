/*
Function Component(StateLess Component):
It is a javascript function which returns react component inside return() method and have props(JS Object) as argument
*/

import React from 'react'
import './product.css'

const s1 = {fontSize: 18,color: 'gray'}

export default function Product(props) {
  return (
         <div className="flexdemo">
            <div className="gallery">
                <a href={props.imgurl}>
                    <img src={props.imgurl} />
                </a>
                <div style={{textAlign:'center'}}>
                    <h3>{props.brand}</h3>
                    <h3>{props.category}</h3>
                    <div className="demo">
                        <a href="" title={props.desc}
                            style={s1}>{props.desc}
                        </a>
                    </div>
                    <h3>&#8377;{props.sp} <small><del>&#8377;{props.mrp}</del></small> <span style={{color: 'green'}}>{props.discount}% Off</span></h3>
                    <h3 style={s1}>Size:{props.size}</h3>
                    <button>Add to Cart</button>&nbsp;&nbsp;<button>Buy Now</button>
                </div>
            </div>
        </div>
    )
}
