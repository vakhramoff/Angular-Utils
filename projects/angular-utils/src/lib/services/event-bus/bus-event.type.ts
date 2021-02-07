/**
 * @summary It's highly recommended to use a enum as an event's type
 * @example
 * export const enum BusEventType {
 *  UPDATE_COUNT = 'UPDATE_COUNT',
 *  CLEAR_CART = 'CLEAR_CART',
 * }
 *
 * type ConcreteBusEvent = BusEvent<number, BusEventType>;
 */
export interface BusEvent<P = any> {
  type: string;
  payload: P;
}
