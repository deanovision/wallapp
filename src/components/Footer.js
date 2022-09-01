import { Group, Anchor } from "@mantine/core";

const Footer = () => {
  return (
    <div className="footer-inner">
      <Group className="links">
        <Anchor
          color="dimmed"
          href="#"
          onClick={(event) => event.preventDefault()}
          size="sm"
        >
          Contact
        </Anchor>
        <Anchor
          color="dimmed"
          href="#"
          onClick={(event) => event.preventDefault()}
          size="sm"
        >
          Privacy
        </Anchor>
        <Anchor
          color="dimmed"
          href="#"
          onClick={(event) => event.preventDefault()}
          size="sm"
        >
          Blog
        </Anchor>
        <Anchor
          color="dimmed"
          href="#"
          onClick={(event) => event.preventDefault()}
          size="sm"
        >
          Careers
        </Anchor>
      </Group>
    </div>
  );
};
export default Footer;
