import { useEffect, useState } from "react";
import { Task } from "../Models/TaskModel";
import axios from "axios";
import { APIURL, headers } from "../Constants";
import Loader from "../Components/Loader";
import TaskTable from "../Components/TaskTableApiData";

const ApiCaller = () => {
  const [data, setData] = useState<Task[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      //constants moved in constants.tsx
      try {
        const response = await axios.get<{ response: { task_list: Task[] } }>(
          APIURL,
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
  }, []);

  if (data) {
    return (
      <>
        <TaskTable data={data} /> {/* Use the TaskTable component */}
      </>
    );
  }

  return <Loader />;
};

export default ApiCaller;
