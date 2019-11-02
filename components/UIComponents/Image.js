import styled from "styled-components";

const ImageElement = styled.img`
  width: ${props => props.height || "300px"};
  height: ${props => props.height || "450px"};
`;

const Image = props => (
  <img
    src={props.src}
    height={props.height}
    width={props.width}
    alt={props.alt}
  />
);

export default Image;
