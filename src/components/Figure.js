import React from 'react';

export default function Fig(props) {
  return (
    <figure style={{textAlign:'center'}}>
      <img src={props.src} alt={props.caption}/>
      <figcaption><i>Fig. {props.num} - {props.caption}</i></figcaption>
    </figure>
  );
}