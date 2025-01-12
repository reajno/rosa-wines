import { pinotNoir } from "@/utils/assets";
import { Button } from "../ui/button";
import { Link } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <main className="pt-[80px] bg-gray-300 h-1/2">
      <div className="h-[70vh]">
        <div className="mx-auto px-4 h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Discover Exquisite Wines
          </h1>
          <p className="text-xl text-white mb-8">
            Curated selection of the finest wines from around the world
          </p>
          <Button as="a" href="#" className="bg-gray-400 ">
            Explore Our Collection
          </Button>
        </div>
      </div>
    </main>
  );
};
export default HeroSection;
