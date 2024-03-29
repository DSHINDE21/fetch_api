export const headers = {
  Authorization: "Token 6d552d51ce2079fd768ea0a9d2cc6b93037325f3",
};

export const USERLIST = "api/v2/staff/borrowing/task/list?l=50&o=0";

export const BASEURL = "https://qa.lendenclub.com/";

export const SEARCH = "api/staff/lender/rm/v2?search=BORROWER&query_text=";

export const API_RM_ID = "&assigned_to_rm=238767";

export const SORT = "&sort_by_since_agreement";

export const ASC = "=asc";

export const DESC = "=desc";

// https://qa.lendenclub.com/api/v2/staff/borrowing/task/list?l=50&o=0&assigned_to_rm=238767&sort_by_since_agreement=asc
// BASEURL + USERLIST + API_RM_ID + SORT + ASC;
// BASEURL + USERLIST + API_RM_ID + SORT + DESC;
// https://qa.lendenclub.com/api/v2/staff/borrowing/task/list?l=50&o=0&assigned_to_rm=238767&sort_by_since_agreement=desc
