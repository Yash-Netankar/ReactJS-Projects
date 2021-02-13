import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Map from "./Map";
import OrderFailed from "./OrderFailed";
import OrderSuccess from "./OrderSuccess";

import FireBase from '../firebase.js';

Modal.setAppElement("#root");

const Card = (props) => {
  const [openModel, setOpenModel] = useState(false);
  const [openModel2, setOpenModel2] = useState(false);
  const [price, setPrice] = useState();
  useEffect(() => {
    setPrice(Math.floor(Math.random() * (200 - 25) + 25));
  }, []);

  const [name, setName] = useState({
    name: "",
    address: "",
  });

  // user information in model1
  const input = (e) => {
    const { name, value } = e.target;
    setName((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //ADD DATA TO FIREBASE
  const sendData = (name)=>{
    FireBase.child("user").push(
      name,
      err=>{if(err) console.log(err)}
    )
  }


  // date
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  if(min<10) min = "0"+min;
  if(hr>12) hr-=12;

  // color for modal 2
  let colors = [
    "#B53471",
    "#EE5A24",
    "#30336b",
    "#c44569",
    "#3c6382",
    "#16a085",
  ];
  let randColor = Math.floor(Math.random() * colors.length);
  let color = colors[randColor];

  const { r } = props;
  return (
    <>
      <div className="card">
        <div className="img-div">
          <img src={r.recipe.image} alt={r.recipe.label} />
        </div>
        <h5>{r.recipe.label}</h5>
        <div className="order_div">
          <h5>Price Rs. {price}</h5>
          <button className="order" onClick={() => setOpenModel(true)}>
            Order Now
          </button>
        </div>
        <ul className="ingredients">
          {r.recipe.ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      {/* Modal */}
      <Modal isOpen={openModel} onRequestClose={() => setOpenModel(false)}>
      <div className="container-fluid">
        <div className="d-flex flex-row justify-content-between">
          <h2 className="text-center model1-heading">User Details for Order Delivery</h2>
          <button
            className="btn btn-danger cross-btn"
            onClick={() => setOpenModel(false)}
          >
            X
          </button>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Your FullName</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              name="name"
              onChange={input}
              value={name.name}
              required={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Current Address"
              name="address"
              onChange={input}
              value={name.address}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary text-center"
            onClick={() => {
              sendData(name);
              setOpenModel(false);
              setOpenModel2(true);
            }}>
            Pay Rs.{price}
          </button>
        </form>
        <div className="container-fluid product-cont">
        <div
          style={{ width: "100%", height: "23vh" }}
          className="d-flex flex-row flex-wrap justify-content-around align-content-center mt-5"
        >
          <img
            className="img-fluid"
            src={r.recipe.image}
            alt={r.recipe.label}
            width="200"
          />

          <div
            style={{ width: "50%", height: "auto" }}
            className="column p-3 my-3 h-100 border product-status"
          >
            <h5 className="text-center">
              Your Order of <span className="text-success">{r.recipe.label}</span> Will be
              delivered by <span className="text-danger"> {`${hr + 1}:${min}`}</span> Today
            </h5>
            <button
              className="btn btn-success"
              onClick={() => setOpenModel2(true)}
            >
              Track Package
            </button>
          </div>
        </div>
        </div>
        </div>
      </Modal>
      {/* Modal 2 */}
      <Modal isOpen={openModel2} onRequestClose={() => setOpenModel2(false)}>
        {name.name === "" && name.address === "" ? (
          <OrderFailed />
        ) : (
          <OrderSuccess n={name.name} addr={name.address} />
        )}
        <h2 className="text-center text-success mt-3 border model2-heading">
          Your Order of <span style={{ color: color }}>{r.recipe.label}</span>{" "}
          is at one of the place amoung all places shown in the below map now,
          Arrving till <span className="text-danger">{`${hr + 1}:${min}`}</span>
        </h2>
        <Map />
        <div className="text-center">
          <button
            className="btn btn-danger"
            onClick={() => setOpenModel2(false)}>
            Okay
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Card;
