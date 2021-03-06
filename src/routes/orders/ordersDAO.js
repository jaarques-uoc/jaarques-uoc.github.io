import {URLS} from "../../common/urls";
import {doGet} from "../../common/helperDAO";

const fetchOrders = () => doGet(`${URLS.ORDERS_WS}/orders/`)
    .catch(e => {
        console.log(`Error when retrieving orders: ${e}`);
        throw '';
    });

const getOrder = id => doGet(`${URLS.ORDERS_WS}/orders/${id}`)
    .catch(e => {
        console.log(`Error when retrieving order ${id}: ${e}`);
        throw '';
    });

const fetchCustomerOrders = customerId => doGet(`${URLS.ORDERS_WS}/customers/${customerId}/orders/`)
    .catch(e => {
        console.log(`Error when retrieving orders for customer ${customerId}: ${e}`);
        throw '';
    });

const fetchOrderEvents = id => doGet(`${URLS.ORDERS_WS}/orders/${id}/events`)
    .catch(e => {
        console.log(`Error when retrieving order events for order ${id}: ${e}`);
        throw '';
    });


export {fetchOrders, fetchCustomerOrders, getOrder, fetchOrderEvents};