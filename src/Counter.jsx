import React from "react";
import data from "./data.json";

class Counter extends React.Component {
  state = {
    quote: data.quotes[0].quote,
    author: data.quotes[0].author,
  };
  getRandom = () => {
    const { quotes } = data;
    const randomNum = Math.floor(Math.random() * quotes.length);
    const { quote, author } = quotes[randomNum];
    this.setState({ quote, author });
  };
  render() {
    const { quote, author } = this.state;
    return (
      <>
        <div className="flex justify-center mt-20">
          <button
            className="btn btn-success p-10 text-4xl"
            onClick={this.getRandom}
          >
            Generate
          </button>
        </div>
        <div className="chat chat-start flex justify-center mt-10">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
              />
            </div>
          </div>
          <div className="chat-bubble">
            {quote} ------ {author}
          </div>
        </div>
      </>
    );
  }
}
export default Counter;
