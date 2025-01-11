import React, { useEffect } from "react";
import teamPhoto from "../../assets/teamPhoto.png";
import teamCelebration from "../../assets/teamCelebration.png";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";  // Changed import

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  marginBottom: theme.spacing(2),
}));

const ImageContainer = styled("div")(({ theme }) => ({
  flex: 1,
  marginRight: theme.spacing(1),
}));

const TextContainer = styled("div")({
  textAlign: "justify",
});

const About = ({ isTextToSpeech }) => {
  const aboutpagedata =
    "We are the ICJC Mavericks. We are a robotics team of middle schoolers competing in the First Lego League robotics competition. We have previously competed in the Razorback competition in Arkansas. This website is a part of our innovation project, and we made it to try and share our passion for astronomy with others. Our goal is to make astronomy an engaging and accessible experience for all. We hope you enjoy this website!";

  useEffect(() => {
    if (isTextToSpeech) {
      const utterance = new SpeechSynthesisUtterance(aboutpagedata);
      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel();
    }
  }, [isTextToSpeech, aboutpagedata]);

  return (
    <Container>
      <StyledContainer>
        <ImageContainer>
          <img
            src={teamPhoto}
            alt="Space ship"
            style={{ width: "100%", height: "auto" }}
          />
        </ImageContainer>
        <ImageContainer>
          <img
            src={teamCelebration}
            alt="Space ship"
            style={{ width: "100%", height: "auto" }}
          />
        </ImageContainer>
      </StyledContainer>
      <TextContainer>{aboutpagedata}</TextContainer>
    </Container>
  );
};

export default About;
