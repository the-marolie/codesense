import React, { Component } from "react";
import axios from "axios";
import Navbar from "@C/Navbar";
import Slider from '@C/Slider';


const data = [
  {
    img: "https://picsum.photos/200/300?random=10",
    text: "Second page slide 1"
  },
  {
    img: "https://picsum.photos/200/300?random=20",
    text: "Second page slide 2"
  },
  {
    img: "https://picsum.photos/200/300?random=30",
    text: "Second page slide 3"
  },
]
class PageTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }


  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />
        <div className="component-container">
         <Slider data={data} />
        </div>
      </>
    );
  }
}

export default PageTwo;
