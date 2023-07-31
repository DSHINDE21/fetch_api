import React from "react";
import { Task } from "../Models/TaskModel";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  BellIcon,
  CheckCircleIcon,
  CheckIcon,
  InfoIcon,
  MinusIcon,
} from "@chakra-ui/icons";

interface TaskTableProps {
  data: Task[];
}

const TaskTable: React.FC<TaskTableProps> = ({ data }) => {
  return (
    <TableContainer overflowX="auto" maxW="100%" m={2}>
      <Table
        variant="striped"
        colorScheme="teal"
        borderWidth="2px"
        borderRadius="md"
        boxShadow="md"
        minWidth="600px"
        size="sm"
      >
        <TableCaption>Borrower List</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>DOB</Th>
            <Th>Age</Th>
            <Th>Email</Th>
            <Th>Mobile Number</Th>
            <Th>Loan Amount</Th>
            <Th>Type</Th>
            <Th>Language</Th>
            <Th>e_nach</Th>
            <Th>occupation</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((task) => (
            <Tr key={task.id}>
              <Td>{task.id}</Td>
              <Td>{task.created_by.first_name}</Td>
              <Td>{task.created_by.gender}</Td>
              <Td>{task.created_by.dob}</Td>
              <Td>{task.created_by.age}</Td>
              <Td>{task.created_by.email}</Td>
              <Td>{task.created_by.mobile_number}</Td>
              <Td>{task.verification_fees_details.amount}</Td>
              <Td>{task.created_by.type}</Td>
              <Td>{task.created_by.preferred_language}</Td>
              {/* <Td>{task.e_nach_submitted}</Td> */}
              <Td>
                {task.e_nach_submitted === "Pending" ? (
                  <InfoIcon />
                ) : (
                  <CheckIcon />
                )}
              </Td>
              {/* <Td>{task.created_by.occupation}</Td> */}
              <Td>
                {task.created_by.occupation === "Salaried" ? (
                  <CheckCircleIcon color="green" />
                ) : task.created_by.occupation === "Self Employed" ? (
                  <CheckIcon color="blue" />
                ) : (
                  <MinusIcon color="red" />
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
