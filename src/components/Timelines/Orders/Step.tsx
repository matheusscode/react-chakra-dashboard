import {
  Box,
  Flex,
  Image,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper,
  Text,
  useMediaQuery,
  useSteps,
} from "@chakra-ui/react";
import { steps } from "./data";

function OrderSteps() {
  const [isLargerThan1400] = useMediaQuery("(max-width: 1400px)");
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  const { activeStep } = useSteps({
    index: -1,
    count: steps.length,
  });

  return (
    <>
      {isLargerThan1400 ? (
        <Flex
          flexDirection={isLargerThan700 ? "column" : "row"}
          justifyContent="space-between"
        >
          <Stepper
            index={activeStep}
            orientation="vertical"
            height="100%"
            gap="1rem"
          >
            {steps.slice(0, 3).map((step) => (
              <Step key={step.id}>
                <StepIndicator>
                  <Image src={step.src} alt={step.alt} />
                </StepIndicator>
                <StepSeparator style={{ height: "100%" }} />

                <Box flexShrink="0">
                  <StepTitle>
                    <Text
                      color="midnightblue"
                      fontWeight="bold"
                      w={isLargerThan700 ? "150px" : "inherit"}
                      flexWrap="wrap"
                      wordBreak="break-word"
                    >
                      {step.title}
                    </Text>
                  </StepTitle>
                  <StepDescription>
                    <Text
                      color="gray.400"
                      fontWeight="bold"
                      fontSize="0.775rem"
                    >
                      {step.description}
                    </Text>
                  </StepDescription>
                </Box>
              </Step>
            ))}
          </Stepper>
          <Stepper
            index={activeStep}
            orientation="vertical"
            height="100%"
            gap="1rem"
          >
            {steps.slice(3, 6).map((step) => (
              <Step key={step.id}>
                <StepIndicator>
                  <Image src={step.src} alt={step.alt} />
                </StepIndicator>
                <StepSeparator style={{ height: "100%" }} />

                <Box flexShrink="0">
                  <StepTitle>
                    <Text
                      color="midnightblue"
                      fontWeight="bold"
                      w={isLargerThan700 ? "150px" : "inherit"}
                      flexWrap="wrap"
                      wordBreak="break-word"
                    >
                      {step.title}
                    </Text>
                  </StepTitle>
                  <StepDescription>
                    <Text
                      color="gray.400"
                      fontWeight="bold"
                      fontSize="0.775rem"
                    >
                      {step.description}
                    </Text>
                  </StepDescription>
                </Box>
              </Step>
            ))}
          </Stepper>
        </Flex>
      ) : (
        <Stepper index={activeStep} orientation="vertical" height="100%">
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
      )}
    </>
  );
}

export default OrderSteps;
