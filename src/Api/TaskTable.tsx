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
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
