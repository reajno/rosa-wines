import { brandLogo } from "@/utils/assets";
import { Link, Image } from "@chakra-ui/react";

const BrandLogo = ({ className }) => {
  return (
    <Link href="/" className={className}>
      <Image src={brandLogo} fit={"contain"} width={"100px"} />
    </Link>
  );
};
export default BrandLogo;
