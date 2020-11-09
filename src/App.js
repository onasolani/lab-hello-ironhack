import React, { Component } from "react";
import Featured from "./Featured";
import "./App.css";

class App extends Component {
  render() {

    return (
    <div className="container">
            <div className="box">
                <div className="nav">
                    <img src="../images/ironhack-logo.svg" alt="ironhack logo"></img>
                    <img src="../images/menu-top.svg" alt="menu"></img>
                </div>
                <div className="text">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button>Awesome!</button>
                </div>
            </div>
            <div className="featured-section">
                <Featured className="featured-box" img="../images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs"/>
                <Featured className="featured-box" img="../images/icon2.png" title="Components" text="Build encapsulated components that manage their state"/>
                <Featured className="featured-box" img="../images/icon3.png" title="Single-Way" text="A set of immutable values are passed to the component's"/>
                <Featured className="featured-box" img="../images/icon4.png" title="JSX" text="Statically-typed designed to run on modern browsers"/>
            </div>
    </div>
    );
  }
}

export default App;
