import { apiInstance } from './api-instance';
import { Row } from '@/@types/row';

export const getAll = async (concertId: number, showId: number):Promise<Row[]> => {
    const res = await apiInstance.get<{ rows: Row[] }>(`/concerts/${concertId}/shows/${showId}/seating`);
    return res.data.rows
}
