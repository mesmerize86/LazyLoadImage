import React, { useRef } from "react";
import styled from "styled-components";
import { useIntersection } from "./intersectionObserver";
import PropTypes from "prop-types";

/**
 * Lazy Loading Image
 *
 * imgSrc     => image path
 * imgAlt     => image alternative text
 * width      => smallest width size
 * height     => smallest height
 * dataSrc    => actual image source to display in smallest device
 * dataSrcset => image source set
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const LazyLoadImage = (props) => {
  const { imgSrc, imgAlt, width, height, dataSrc, dataSrcset } = props;
  const imgRef = useRef();
  useIntersection(imgRef);
  return (
    <__Image
      src={`${imgSrc}?w=10&fit-crop&q=60&auto=format`}
      ref={imgRef}
      alt={imgAlt}
      width={width}
      height={height}
      data-src={dataSrc}
      data-srcset={dataSrcset}
    />
  );
};

export default LazyLoadImage;

LazyLoadImage.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  dataSrc: PropTypes.string,
  dataSrcset: PropTypes.string
};

const __Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
