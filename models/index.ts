export interface Employee{
    id:string,
    firstName: string,
    lastName: string,
    email:string,
    dateOfBirth:string,
    family: Reletive[],
    
}
interface Reletive{
    name:string,
    dateOfBirth:string,
    relation:Relation
}

type Relation="son"|"daughter"|"spouse"