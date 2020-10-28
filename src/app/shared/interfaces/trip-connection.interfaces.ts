import { ITrip } from 'student-expense-types';

export interface IPageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export interface INode {
    cursor: string;
}

export interface IEdge {
    cursor: string;
}

export interface IConnection {
    pageInfo: IPageInfo;
}

export interface ITripConnection extends IConnection {
    edges?: [ITripEdge];
}

export interface ITripEdge extends IEdge {
    node?: ITrip;
}

export interface ITripResult {
    tripsConnection?: ITripConnection;
}