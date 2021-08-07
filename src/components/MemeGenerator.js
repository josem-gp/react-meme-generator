import React, { useState } from "react";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  const callApi = () => {
    const fetchData = fetch("https://api.imgflip.com/get_memes")
      .then((result) => result.json())
      .then((data) => console.log(data.data.memes));

    setAllMemeImgs(fetchData);
  };

  return (
    <div>
      <p>Hi from MemeGenerator!</p>
    </div>
  );
};

export default MemeGenerator;
