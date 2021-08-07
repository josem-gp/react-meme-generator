import React, { useState, useEffect } from "react";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((result) => result.json())
      .then((data) => setAllMemeImgs(data.data.memes));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "topText") {
      setTopText(value);
    } else {
      setBottomText(value);
    }
  };

  return (
    <div>
      <form className="meme-form">
        <input
          type="text"
          name="topText"
          value={topText}
          placeholder="top Text"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="bottomText"
          value={bottomText}
          placeholder="bottom Text"
          onChange={handleChange}
        ></input>
        <button>Gen</button>
      </form>
    </div>
  );
};

export default MemeGenerator;
