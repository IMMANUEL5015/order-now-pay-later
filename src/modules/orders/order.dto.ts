export interface create {
    amount: number;
    department_id: number;
    item: string;
    quantity: number;
    pay_now: boolean;
  }

export interface transaction {
    _id: object,
    amount: number, 
    business_id: number,          
    reference: string, 
    status: string
  }

export interface request {
    _id: object,
    owner: number,
    url: string,
    body: string,
    isDuplicate: boolean
}

export interface update {
  reference: string,
  department_id: number
}