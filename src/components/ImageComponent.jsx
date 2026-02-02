import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={`https://${this.props.animalUrl}400/300`} alt={this.props.alt} />
      </div>
    );
  }
}

export default ImageComponent;
