import React from 'react';

const ItemList = ({ colors }) => {
    return (
        <>
            <ul>
                {
                    colors.map((color,index) => (
                        <li key={index}>{color}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default ItemList;