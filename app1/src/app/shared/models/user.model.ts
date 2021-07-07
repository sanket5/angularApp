
export class User{
    id:string
    password: string
}

export class UserRequest{
    client_id:string
    user:User
}

export class UserResponse{
    success:boolean
    isUserAuthenticated: boolean
    customerId:string
}