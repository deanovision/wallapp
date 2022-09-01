import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import "./Home.css";
const Home = () => {
  return (
    <div className="hero">
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className="hero-container">
        <div className="hero-center">
          <Title className="title">Lorem ipsum dolor</Title>
          <Text className="description" size="xl" mt="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </Text>

          <Button variant="gradient" size="xl" radius="xl" className="control">
            Get started
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default Home;
