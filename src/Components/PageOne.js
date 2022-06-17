import React, { Component } from "react";
import axios from "axios";
import Navbar from "@C/Navbar";
import Slider from '@C/Slider';


const data = [
  {
    img: "https://picsum.photos/200/300?random=1",
    text: "First page slide 1"
  },
  {
    img: "https://picsum.photos/200/300?random=2",
    text: "First page slide 2"
  },
  {
    img: "https://picsum.photos/200/300?random=3",
    text: "First page slide 3"
  },
]
class PageOne extends Component {
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
         <Slider className="page-1" data={data} />
        </div>
      </>
    );
  }
}

export default PageOne;
