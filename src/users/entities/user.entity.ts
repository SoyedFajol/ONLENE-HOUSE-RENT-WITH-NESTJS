
import { Roles } from "src/utility/common/user-roles.enum";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    name?:string;
    @Column({unique:true})
    email?:string;
    @Column({select:false})
    password:string;
    @Column({type:'enum',enum:Roles,array:true,default:[Roles.USER]})
    roles?:Roles[];
    @CreateDateColumn()
    createdAr?:Timestamp;
    @UpdateDateColumn()
    updatedAt?:Timestamp;
    
    //@ManyToMany(() => CategoryEntity)
    //@JoinTable()
   // categories?: CategoryEntity[];
    


}

export class User {}
