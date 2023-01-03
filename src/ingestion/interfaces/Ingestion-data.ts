export interface Dimension{
    dimension_name: string,
    dimension:Array<object>[]
}
export interface IEvent{
    event_name: string,
    event:Array<object>[]
}
export interface Dataset{
    dataset_name: string,
    dataset:object
}
export interface Pipeline{
    pipeline_name: string,
    schedule_type: string
}
export interface Result{
    code: number,
    message?: string,
    error?:string
}