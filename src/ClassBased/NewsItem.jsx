import { Component } from "react";
import "./mystyle.css"
import pic from "./noimage.jpg"

export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="card mt-3 border border-dark">
            <img src={this.props.image?this.props.image:pic}className="card-img-top" height="230px"alt=" " />
            <div className="card-body ">
              <h5 className="card-title"style={{height:"80px"}}>{this.props.title.slice(0,50)}</h5>
              <h6>{new Date(this.props.date).toString()}</h6>
              <p className="card-text" style={{height:"150px"}}>{this.props.description?this.props.description.slice(0,200)+"...":" "}</p>
              <a href={this.props.url} className=" btn background text-light w-100 ">Read Full Articals</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
