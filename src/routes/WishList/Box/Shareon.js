import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

const Shareon = () => {
  // A Function To Copy The Input Text
  const copyText = () => {
    const copyText = document.querySelector("#link input");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  };
  const shareUrl = "https://www.myakbar.com";
  return (
    <div className="share-on">
      {/* --------------- */}
      <div className="left-side">
        <span>Share on: </span>
        <ul>
          <li>
            <a href="/">
              <FacebookShareButton url={shareUrl}>Facebook</FacebookShareButton>
            </a>
          </li>
          <li>
            <a href="/">
              <EmailShareButton url={shareUrl}>Mail</EmailShareButton>
            </a>
          </li>
          <li>
            <a href="/">
              <TwitterShareButton url={shareUrl}>Twitter</TwitterShareButton>
            </a>
          </li>
        </ul>
      </div>
      {/* --------------- */}
      {/* --------------- */}
      <div className="right-side">
        <div id="link">
          <span>Wishlist link: </span>
          <input
            onClick={copyText}
            type="text"
            name="link"
            value={"https://www.myAkbar.com"}
          />
          <button onClick={copyText}>Copy</button>
        </div>
      </div>
      {/* --------------- */}
    </div>
  );
};

export default Shareon;
