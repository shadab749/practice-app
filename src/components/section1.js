import React, { useState } from "react";
import treelogo from './images/logo-1.jpg';
import banner2 from './images/banner1 (2).jpg';
import banner3 from './images/Business-Web-Banner-19.jpg'

// import { unmountComponentAtNode } from 'react-dom';



const Section = () => {

    const [change, setChnage] = useState(true);

    var Data=[
        {name:"Shadab", age:"20", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias assumenda at debitis voluptatem? Unde veniam laudantium officia ipsa"},
        {name:"Shaurabh", age:"24", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias assumenda at debitis voluptatem? Unde veniam laudantium officia ipsa"},
        {name:"Shahnawaz", age:"23", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias assumenda at debitis voluptatem? Unde veniam laudantium officia ipsa"},
        {name:"Rahul", age:"24", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias assumenda at debitis voluptatem? Unde veniam laudantium officia ipsa"},
        {name:"Shadab", age:"20", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias assumenda at debitis voluptatem? Unde veniam laudantium officia ipsa"},
        {name:"Shaurabh", age:"24", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias assumenda at debitis voluptatem? Unde veniam laudantium officia ipsa"},
        {name:"Shahnawaz", age:"23", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias assumenda at debitis voluptatem? Unde veniam laudantium officia ipsa"},
        {name:"Rahul", age:"24", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias assumenda at debitis voluptatem? Unde veniam laudantium officia ipsa"}
    ]

    return(
        <>
            
        <div className="container-xl">
        <div className="row ">
           <div className="col">
                <h1 className="heading1">React is a popular language in the world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias assumenda at debitis voluptatem? Unde veniam laudantium officia ipsa, voluptas facilis est fuga animi voluptate dolorem laboriosam magni soluta incidunt!</p>

                <button onClick={() => setChnage(!change)}  className="bg-theme btn" >Read more</button>

               {/* <img className="" src={treelogo} style={{width:"50%"}} alt="" /> */}

           </div>
           <div className="col">
                {change?<img src={treelogo} alt="" style={{width:"100%"}} />:
                 <img src={banner3} alt="" style={{width:"100%"}} />}
           </div>
        </div>
        <div className="row sec">
                    {Data.map(eachdata => 
                        <div className="col-6">
                            <div className="card">
                                <img src={banner2} style={{width:"100%"}} alt="" />
                                <div className="card-body">
                                    <h4>{eachdata.name}</h4>
                                    <span style={{fontWeight:"600"}}>Age:{eachdata.age}</span>
                                    <p>{eachdata.description}</p>

                                </div>
                            </div>
                        </div>
                        
                    )}
                </div>
        </div>
        </>
    )
}


export default Section;