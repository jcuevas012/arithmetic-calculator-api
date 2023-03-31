export type IRequest = {
    payload: unknown
    params: unknown
    query: unknown
}

export type IResponse = {
    status: number
    payload: unknown
}

export interface IController {
    handle(req: IRequest): Promise<IResponse>
}