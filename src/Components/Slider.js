import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      activeSlide: 0,
      count: this.props.data.length,
    };
  }

  componentDidMount() {

  }

  handlePrev = () => {
   
    let active = this.state.activeSlide;
    if(active == 0) {
      return false;
    }
    this.setState({ activeSlide: this.state.activeSlide - 1});
  };

    handleNext = () => {
    let count = this.state.count;
    let active = this.state.activeSlide;
    if(active == count-1) {
      return false;
    }
    this.setState({ activeSlide: this.state.activeSlide + 1});
  };



  render() {
    const slides = this.state.data;
    return (
      <>
        <div className={`slideshow-container ${this.props?.class || ""}`}>
          {slides.map((item, i) => (
            <div key={i} className={`slides fade ${(this.state.activeSlide == i) ? "active" : ""}`}>
              <img src={item.img} />
              <div className="text">{item.text}</div>
            </div>
          ))}
          <a className="prev" onClick={this.handlePrev}>
            Prev
          </a>
          <a className="next" onClick={this.handleNext}>
            Next
          </a>
        </div>
      </>
    );
  }
}

export default Slider;
