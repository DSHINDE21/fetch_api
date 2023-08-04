import { useEffect, useState } from "react";
import { Center, Container, Heading, Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../Utils/logoutUtils";
import LogoutButton from "../Components/LogoutButton";
import { Task } from "../Models/TaskModel";
import { fetchDataFromAPI } from "../Api/ApiCaller";
import TaskTable from "../Components/TaskTableApiData";
import SearchBox from "../Components/SeachBox";
import Loader from "../Components/Loader";

const ListPageView = () => {
  const navigate = useNavigate();
  // const [dataFetched, setDataFetched] = useState<Task[]>([]);
  const [dataFetched, setDataFetched] = useState<Task[]>([]);

  const handleSearch = async (isSearch: boolean, searchQuery: string) => {
    console.log(isSearch);
    console.log(searchQuery);
    const data = await fetchDataFromAPI(isSearch, searchQuery);
    handleDataFetched(data);
    // Pass the data to handleDataFetched
    console.table(data);
  };

  // data from all calls stored here and then pass to TaskTable.tsx
  const handleDataFetched = (data: Task[] | null) => {
    if (data) {
      setDataFetched(data);
      console.log("Value is :", data);
    } else {
      <Loader />;
      setIsLoading(true);
      console.log("yes");
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromAPI(false, "");
        console.log("i am login:", data);
        setDataFetched(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Container maxW="sm" mt={3}>
        <Center position="sticky" top="0" zIndex="1" bg="white">
          <Image src="/logo.png" alt="Logo" h="50px" mr={4} mt={3} />
          <Heading as="h1" size="xl" color="red.500" textAlign="center" mt={5}>
            User List
          </Heading>
        </Center>
      </Container>
      <LogoutButton handleLogout={() => handleLogout(navigate)} />
      <SearchBox onSearch={handleSearch} />
      {isLoading ? <Loader /> : <TaskTable data={dataFetched} />}{" "}
    </Box>
  );
};

export default ListPageView;
