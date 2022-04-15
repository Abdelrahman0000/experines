import React, { useEffect, useState } from "react";
import {FaAngleDoubleRight} from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
const [loading,setloading]=useState(true);
const [job,setjob]=useState([])
const [value,setvalue]=useState(0)

const myfeatch=async ()=>{
  const response=await fetch(url);
  const newfeatch=await response.json();
  setjob(newfeatch);
  setloading(false);
}

useEffect(()=>{
  myfeatch();
},[])
if(loading){
  return(
    <section className="section loading">
      <h1>Loading...</h1>
    </section>
  )
}
const {company,dates,duties,title}=job[value];
  return (
    <section className="section">
      <div className="title">
        <h2>expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
<div className="btn-container">{job.map((item,index)=>(
  <button key={item.id} onClick={()=>{setvalue(index)}} className={`job-btn ${index===value &&'active-btn'}`}>{item.company}</button>
))}</div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((dat,index)=>(
            <div key={index} className='job-desc'>
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{dat}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default App;
