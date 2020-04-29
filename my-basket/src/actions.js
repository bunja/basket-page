export function receiveBasketInfo() {
    console.log("hoho action is in action");
    return {
        type: "RECEIVE_BASKET_INFO",
            
        basket: {
            items: [
                {
                    id: 0,
                    product: "Cotton T-Shirt, Medium",
                    price: 1.99,
                    qty: 1,
                    cost: 1.99
                },
                {
                    id: 1,
                    product: "Baseball Cap, One Size",
                    price: 2.99,
                    qty: 2,
                    cost: 5.98
                },
                {
                    id: 2,
                    product: "Swim Shorts, Medium",
                    price: 3.99,
                    qty: 1,
                    cost: 3.99
                },
            ],
            subtotal: 11.96,
            vat: 2.39,
            total: 14.35
        }
    };
}  

export  function removeItem(id) {
    
    return {
        type: "REMOVE_ITEM",
        id
    };
}