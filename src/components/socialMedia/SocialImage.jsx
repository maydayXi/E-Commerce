import styled from "@emotion/styled";

/**
 * SocialImage component
 */
const SocialImage = styled("div")(({ image, imageHeight }) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "90%",
    height: imageHeight,
}));

export default SocialImage;
