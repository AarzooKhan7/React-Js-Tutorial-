import React from "react";
export default function Hero(props){
 let myStyle= {
   width:"40%"
 }
 return (
    <>
    <div className="card text-center">
  <div className="card-header">
    {props.title}
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.announcement}</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>


      <div className="card">
  <img src="images.png" className="card-img-top" alt="logo" style= {myStyle}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>




<ol className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
</ol>
      





    </>
  )
}