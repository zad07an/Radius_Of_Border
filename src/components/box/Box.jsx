import React, { useState } from "react";
import styles from "./Box.module.css";

const Box = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [property, setProperty] = useState({
    width: "300",
    height: "300",
    radiusTopLeft: "",
    radiusTopRight: "",
    radiusBottomLeft: "",
    radiusBottomRight: "",
  });

  const handleRangeChange = (e) => {
    setProperty((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }
  
  const cssCode = `
    div {
      width: ${property.width ? property.width + 'px' : '0px'};
      height: ${property.height ? property.height + 'px' : '0px'};
      border-top-left-radius: ${property.radiusTopLeft ? property.radiusTopLeft + 'px' : '0px'};
      border-top-right-radius: ${property.radiusTopRight ? property.radiusTopRight + 'px' : '0px'};
      border-bottom-left-radius: ${property.radiusBottomLeft ? property.radiusBottomLeft + 'px' : '0px'};
      border-bottom-right-radius: ${property.radiusBottomRight ? property.radiusBottomRight + 'px' : '0px'};
    }
  `

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.properties}>
          <div>
            <label htmlFor="width">Width</label>
            <input
              type="text"
              id="width"
              name="width"
              value={property.width}
              onChange={handleRangeChange}
              placeholder="Width"
            />
          </div>
          <div>
            <label htmlFor="height">Height</label>
            <input
              type="text"
              id="height"
              name="height"
              value={property.height}
              onChange={handleRangeChange}
              placeholder="Height"
            />
          </div>
          <div>
            <label htmlFor="top_left">Top left radius</label>
            <input
              type="text"
              id="top_left"
              name="radiusTopLeft"
              value={property.radiusTopLeft}
              onChange={handleRangeChange}
              placeholder='Top Left Radius'
            />
          </div>
          <div>
            <label htmlFor="top_right">Top right radius</label>
            <input
              type="text"
              id="top_right"
              name="radiusTopRight"
              value={property.radiusTopRight}
              onChange={handleRangeChange}
              placeholder='Top Right Radius'
            />
          </div>
          <div>
            <label htmlFor="bottom_left">Bottom left radius</label>
            <input
              type="text"
              id="bottom_left"
              name="radiusBottomLeft"
              value={property.radiusBottomLeft}
              onChange={handleRangeChange}
              placeholder='Bottom Left Radius'
            />
          </div>
          <div>
            <label htmlFor="bottom_right">Bottom right radius</label>
            <input
              type="text"
              id="bottom_right"
              name="radiusBottomRight"
              value={property.radiusBottomRight}
              onChange={handleRangeChange}
              placeholder='Bottom Right Radius'
            />
          </div>
        </div>
        <div
          className={styles.box}
          style={{
            width: property.width + 'px',
            height: property.height + 'px',
            borderTopLeftRadius: property.radiusTopLeft ? property.radiusTopLeft + "px" : '0px',
            borderTopRightRadius: property.radiusTopRight ? property.radiusTopRight + "px" : '0px',
            borderBottomLeftRadius: property.radiusBottomLeft ? property.radiusBottomLeft + "px" : '0px',
            borderBottomRightRadius: property.radiusBottomRight ? property.radiusBottomRight + "px" : '0px',
          }}
        ></div>
      </div>
      <div className={styles.code}>
        <p onClick={() => handleCopy(cssCode)}>{isCopied ? "Copied!" : "Copy"}</p>
        <pre>{cssCode}</pre>
      </div>
    </div>
  );
};

export default Box;
