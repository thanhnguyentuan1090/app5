import React from 'react'

export default function TodoItem({ index, value }) {
    return (
        <div className='item'>
            <li className='trash'>{index}. {value}</li>
            {/* <button style="font-size:24px"><i className="fa fa-trash-o"></i></button> */}
            <div className='del__button'><i className="fa fa-trash-o"></i></div>
        </div>


    )
}
