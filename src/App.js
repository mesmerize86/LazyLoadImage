import React from "react";
import imageData from "./imageData";
import LazyLoadImage from "./LazyLoadImage";

export default function App() {
  return (
    <div className="App">
      <h1>Lazy Load Images</h1>
      <section>
        {imageData.map((image) => (
          <LazyLoadImage
            key={image.id}
            imgSrc={image.url}
            imgAlt={image.id}
            width={375}
            height={195}
            dataSrc={`${image.url}?w=480&auto=format`}
            dataSrcset={`${image.url}?w=480&auto=format 480w, ${image.url}?w=960&auto=format 960w, ${image.url}?w=1440&auto=format 1440w, ${image.url}?w=2000&auto=format 1920w`}
          />
        ))}
      </section>
    </div>
  );
}
