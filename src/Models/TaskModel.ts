export interface Task {
  id: number;
  created_by: {
    first_name: string;
    gender: string;
    dob: string;
    age: number;
    email: string;
    mobile_number: string;
    type: string;
    occupation: string | null;
    preferred_language: string | null;
    // loan_status: string | null;
    e_nach_submitted: "pending";
  };
  verification_fees_details: {
    amount: number;
  };
}
