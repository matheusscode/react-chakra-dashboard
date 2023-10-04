import {
  Box,
  Image,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";
import { steps } from "./data";

function OrderSteps() {
  const { activeStep } = useSteps({
    index: -1,
    count: steps.length,
  });

  return (
    <>
      <Stepper index={activeStep} orientation={"vertical"} height="100%">
        {steps.map((step) => (
          <Step key={step.id}>
            <StepIndicator>
              <Image src={step.src} alt={step.alt} />
            </StepIndicator>
            <StepSeparator style={{ height: "100%" }} />

            <Box flexShrink="0">
              <StepTitle>
                <Text color="midnightblue" fontWeight="bold">
                  {step.title}
                </Text>
              </StepTitle>
              <StepDescription>
                <Text color="gray.400" fontWeight="bold" fontSize="0.775rem">
                  {step.description}
                </Text>
              </StepDescription>
            </Box>
          </Step>
        ))}
      </Stepper>
    </>
  );
}

export default OrderSteps;
