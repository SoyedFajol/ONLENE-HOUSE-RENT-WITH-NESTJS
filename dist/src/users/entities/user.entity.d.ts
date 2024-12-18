import { Roles } from "src/utility/common/user-roles.enum";
import { Timestamp } from "typeorm";
export declare class UserEntity {
    id?: number;
    name?: string;
    email?: string;
    password: string;
    roles?: Roles[];
    createdAr?: Timestamp;
    updatedAt?: Timestamp;
}
export declare class User {
}
