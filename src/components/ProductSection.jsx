import { chardonnay, pinotGrigio, pinotNoir, prosecco } from "@/utils/assets";
import { Box, Image, Text, HStack, Badge, Icon } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import Card from "./Card";

const ProductSection = () => {
  return (
    <section>
      <div className="flex flex-col gap-10 p-5 md:px-20 bg-slate-400">
        <h1 className="mr-auto text-3xl font-bold">Fan Favourites</h1>
        <div className="flex flex-wrap justify-center gap-8 lg:justify-between">
          <Card
            className="shrink"
            src={pinotGrigio}
            title={"Crystal Bloom"}
            type={"Pinot Grigio"}
            rating={"4.9"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eius!"
            }
          />
          <Card
            src={pinotNoir}
            title={"Garnet Glow"}
            type={"Pinot Noir"}
            rating={"4.7"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eius!"
            }
          />
          <Card
            src={chardonnay}
            title={"Citrus Harmony"}
            type={"Chardonnay"}
            rating={"4.5"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eius!"
            }
          />
          <Card
            src={prosecco}
            title={"Golden Glow"}
            type={"Prosecco"}
            rating={"4.5"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eius!"
            }
          />
        </div>
      </div>
    </section>
  );
};
export default ProductSection;
