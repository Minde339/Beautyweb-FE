import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      "https://media.gettyimages.com/photos/girlfriends-getting-new-haircut-picture-id450245049?s=2048x2048",
  },
  {
    imgPath:
      "https://media.gettyimages.com/photos/empty-black-chairs-and-mirrors-in-barber-shop-picture-id1030255416?s=2048x2048",
  },
  {
    imgPath:
      "https://media.gettyimages.com/photos/hair-cutting-during-pandemic-picture-id1225156964?s=2048x2048",
  },
  {
    imgPath:
      "https://media.gettyimages.com/photos/hair-dresser-small-business-picture-id1139132186?s=2048x2048",
  },
  {
    imgPath:
      "https://media.gettyimages.com/photos/the-hairdresser-is-cutting-out-hair-picture-id899173534?s=2048x2048",
  },
  {
    imgPath:
      "https://media.gettyimages.com/photos/hairdresser-using-hairdryer-picture-id956385860?s=2048x2048",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
    flexGrow: 1,
    maxHeight: "80%",
    paddingLeft: theme.spacing(4),
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: "#1b1b1b",
  },
  img: {
    maxWidth: "80%",
    overflow: "hidden",
    width: "100%",
  },
}));

function Stepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </div>
  );
}

export default Stepper;
