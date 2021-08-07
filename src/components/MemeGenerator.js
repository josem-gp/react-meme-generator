import React, { useState } from "react";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  return (
    <div>
      <p>Hi from MemeGenerator!</p>
    </div>
  );
};

export default MemeGenerator;
