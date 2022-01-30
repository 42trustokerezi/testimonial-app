import React from 'react';
import MemorialCard from '../MemorialCard/MemorialCard';

function MemorialList({memorials}) {
    console.log(memorials);

    const renderMemorialList = memorials.map((memorial, id) =>{
           return (
                <MemorialCard memorial={memorial} id={id}/>
           )     
    })
  return (
        <div>
           {renderMemorialList}
        </div>
        );
}

export default MemorialList;
