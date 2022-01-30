import React from 'react';

function MemorialCard({memorial, id}) {
  return (
    <div className="item" key={id}>
    <div className="content">
        <div className="image"><img src={memorial.image}/></div>
        <div className="image">{`${memorial.firstName} ${memorial.lastName}`}</div>
        <div className="image">{memorial.story}</div>
        <div className="image">{memorial.referral}</div>
    </div>
</div>
  );
}

export default MemorialCard;
