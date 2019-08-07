import { IKeyValuePair } from './../../shared/key-value-pair.model';
import { IEntity } from '../../shared/entity.model';
import { IAuditable } from '../../shared/auditable.model';

export interface IUser extends IEntity, IAuditable {
    fullName: string;
    userName: string;
    email: string;
    userRole: IKeyValuePair;
}

export interface ISaveUser extends IEntity {
    fullName: string;
    userName: string;
    email: string;
    userRoleId: string;
}
