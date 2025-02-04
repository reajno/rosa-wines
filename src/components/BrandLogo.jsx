import { brandLogo } from "@/utils/assets";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BrandLogo = () => {
  return (
    <Link to="/">
      <Image src={brandLogo} fit={"contain"} width={"100px"} />
    </Link>
  );
};
export default BrandLogo;
