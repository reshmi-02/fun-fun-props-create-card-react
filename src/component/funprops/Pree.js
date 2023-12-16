import React from 'react'
import './pree.css'
const Pree=(card)=>{
    console.log(card);
    return(
        // <div>
        //     {/* <p>child</p>
        //     <p>name= {check.name}</p>
        //     <p>age= {check.age}</p>
        //     <p>obj= {check.o.a}</p>
        //     <p>array= {check.arr[3]}</p>
        //     <p>{
        //         check.list.map((value,i)=>{
        //             return(
        //                 <p key={i}>{value.name}</p>
        //             )
        //         })
        //         }</p> */}
        // </div>
        <div className='card-section'>
                <div className='card-container'>
                    <div className='card-row' >
                        {
                            card.car.map((value)=>{
                                return(
                                    <div key={value.id} className='card-col'>
                                        <div className='card-card'>
                                            <div className='card-image'>
                                                <img src={value.image} alt=""/>
                                            </div>
                                            <h3>{value.brandname } {value.carname}</h3>
                                            
                                            <p>{value.price} lakh</p>
                                            <div className='card-btn'>
                                                <a href=" ">{value.btn}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

export default Pree