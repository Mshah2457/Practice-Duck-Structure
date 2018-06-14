import { Map } from 'immutable';

export interface SampleModel extends Map<string, any> {
    userId: number,
    id: number,
    title: number,
    body: number
}