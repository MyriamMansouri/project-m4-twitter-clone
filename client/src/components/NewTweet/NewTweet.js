import React from "react";
import Button from "../misc/Button";

const NewTweet = () => {
  const [remainingCharacters, setRemainingCharacters] = React.useState(280);
  const [tweet, setTweet] = React.useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setTweet(text);
    setRemainingCharacters(280 - text.length);
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
        await fetch("/api/tweet", {
            method: "POST",
            body: JSON.stringify({ status: tweet }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
            setTweet("")
    } catch(err) {
        console.log(err)
    }
     

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's happening ?"
          value={tweet}
          onChange={handleChange}
        />
        {remainingCharacters}
        <Button >Meow</Button>
      </form>
    </>
  );
};

export default NewTweet;
