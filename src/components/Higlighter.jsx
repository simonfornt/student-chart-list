import React from 'react'

function Higlighter({text, highlight}) {

    if(!highlight) return <>{text}</>

    const regex = new RegExp (`(${highlight})`, 'gi');
    const parts = text.split(regex);


  return (
    <>
        {parts.map((part, i) => (
            regex.test(part) ? (
                <span key={i} className='bg-yellow-300'>
                    {part}
                </span>
            ) : (
                part
            )
        ))}
    </>
  );
}

export default Higlighter