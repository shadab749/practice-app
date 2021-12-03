import react from "react";

const Popup = props =>{
    return(
        <>
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={props.handleClosed}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" style={{marginTop:"10px"}} class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                    </span>
                    {props.content}
                </div>
            </div>
        </>

    )

}


export default Popup;