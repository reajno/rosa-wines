import useAuth from "@/hooks/useAuth";
import SectionHeading from "../Sections/SectionHeading";
import { Box, Container } from "@chakra-ui/react";

const Dashboard = () => {
  const { user, isLoading } = useAuth();

  return (
    <Box as="section" className="bg-slate-400">
      <Container py="4rem">
        <SectionHeading title="Dashboard" color="white" />
        {isLoading
          ? "LOADING..."
          : user
          ? `Hello ${user.email}`
          : "not logged in"}
      </Container>
    </Box>
  );
};
export default Dashboard;
