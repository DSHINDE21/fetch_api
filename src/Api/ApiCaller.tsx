import { useEffect, useState } from "react";
import { Task } from "../Models/TaskModel";
import axios, { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";
import {
  headers,
  BASEURL,
  USERLIST,
  API_RM_ID,
  //  , SEARCH
} from "../Constants";
import Loader from "../Components/Loader";
import TaskTable from "../Components/TaskTableApiData";

const ApiCaller = () => {
  const [data, setData] = useState<Task[] | null>(null);
  const toast = useToast();
  useEffect(() => {
    async function fetchData() {
      //constants moved in constants.tsx
      try {
        const response = await axios.get<{ response: { task_list: Task[] } }>(
          `${BASEURL}${USERLIST}${API_RM_ID}`,
          { headers }
        );
        setData(response.data.response.task_list);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError: AxiosError = error;
          // Check if the request was made and the server responded with a status code
          if (axiosError.response) {
            // Handle specific HTTP status codes here
            if (axiosError.response.status === 401) {
              // Unauthorized (e.g., authentication failure)
              toast({
                title: "Error",
                description: "Unauthorized - Please log in again.",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            } else if (axiosError.response.status === 404) {
              // Not Found (e.g., the requested resource was not found)
              toast({
                title: "Error",
                description: "Resource not found.",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            } else {
              // Handle other status codes
              toast({
                title: "Error",
                description: `Unexpected status code ${axiosError.response.status}`,
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
          } else {
            // Handle network-related errors (e.g., no internet connection)
            toast({
              title: "Error",
              description:
                "Network-related error. Please check your internet connection.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        } else if (error instanceof Error) {
          // Generic JavaScript error
          toast({
            title: "Error",
            description:
              "An unexpected error occurred. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else {
          // Catch any other types of errors
          toast({
            title: "Error",
            description:
              "An unexpected error occurred. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
    }

    fetchData();
  }, [toast]);

  if (data) {
    return (
      <>
        <TaskTable data={data} />
      </>
    );
  }

  return <Loader />;
};

export default ApiCaller;
