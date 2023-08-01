import { useEffect, useState } from "react";
import { Task } from "../Models/TaskModel";
import axios from "axios";
import { BASEURL, SEARCH, API_RM_ID, headers } from "../Constants";

import Loader from "../Components/Loader";
import TaskTable from "../Components/TaskTableApiData";

interface SearchApiCallerProps {
  searchQuery: string;
}

const SearchApiCaller: React.FC<SearchApiCallerProps> = ({ searchQuery }) => {
  const [data, setData] = useState<Task[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      //constants moved in constants.tsx
      try {
        const response = await axios.get<{ response: { task_list: Task[] } }>(
          `${BASEURL}${SEARCH}${searchQuery}${API_RM_ID}`,
          { headers }
        );
        setData(response.data.response.task_list);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error state here
      }
    }

    // Calling the fetchData function to make the API call
    fetchData();
  }, [searchQuery]);

  if (data) {
    return (
      <>
        <TaskTable data={data} />
      </>
    );
  }

  return <Loader />;
};

export default SearchApiCaller;
