import React, { useState, useEffect } from "react";

function Messages() {
  const [loveMessages, setLoveMessages] = useState();

  useEffect(() => {
    fetch("https://random-messages-mb.web.app/lovemessages")
      .then((response) => response.json())
      .then((data) => setLoveMessages(data))
      .catch(console.error);
  }, [loveMessages]);

  console.log({ loveMessages });

  return (
    <>
      <h1>Leave A Message 💜</h1>
      {!loveMessages ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>Love Messages</h2>
          {loveMessages.map((loveMessage) => {
            return <p key={loveMessage.id}>{loveMessage.name}, {loveMessage.message}</p>;
          })}
        </>
      )}
    </>
  );
}


export default Messages;