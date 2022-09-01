import wallLogo from "../assets/logo.png";
import { Image } from "@mantine/core";

const Logo = () => {
  return (
    <>
      <Image src={wallLogo} radius={100} height={40} width={40} />
    </>
  );
};
export default Logo;
