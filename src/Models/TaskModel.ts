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
  };
  verification_fees_details: {
    amount: number;
  };
}
