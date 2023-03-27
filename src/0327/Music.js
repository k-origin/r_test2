import React from 'react';
import musicdata from './music_data.json';

function Music() {
  return (
    <>
      <ul className="musicul">
        {musicdata.list.slice(0,20).map(md=>(
          <li key={md.id} className="musicli">
            <p>{md.id}</p>        
            <p>{md.title}</p>
            <p><img src={`${md.url}`} /></p>
            <p><img src={`${md.thumbnailUrl}`} /></p>            
          </li>
        ))}

      </ul>
    </>
  );
}

export default Music;
