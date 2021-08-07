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

  return (
    <div>
      <p>Hi from MemeGenerator!</p>
    </div>
  );
};

export default MemeGenerator;
