import React from "react";


function Trailer(){
    return(
        <div style={{ display:"flex",justifyContent:"center"}}>
            <iframe width="80%" height="700" style={{borderRadius:"10px", border:"1px solid #62079F", boxShadow: "0 0 20px  #c653e994"}} src="https://www.youtube.com/embed/Way9Dexny3w?si=M6Ln9nEv2PjqSthc"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    )
}

export default Trailer;