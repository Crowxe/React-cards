import React, { useState } from 'react'

function ShowHide() {

    const [show, setShow] = useState(true);
    const handleClick = (event) => {
        setShow(!show);
    }
  return (
    <div>
        <button onClick={handleClick}>{show ? "HIDE" : "SHOW"} TEXT</button>
        {show ? <h2>HIDE ME!</h2> : ""}
    </div>
  )
}

export default ShowHide