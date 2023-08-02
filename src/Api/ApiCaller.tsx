import { useEffect, useState } from "react";
import { Task } from "../Models/TaskModel";
import axios from "axios";
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
        console.error("Error fetching data:", error);
        // Handle the error state here
      }
    }

    fetchData();
  }, []);

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
