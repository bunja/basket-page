const sum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}


export default function reducer(state = {}, action) {
    // if (action.type == "ACTION_TYPE") {
    //     state = { ...state }; //clonning your state
    // }
    // if (action.type == "ACTION_TYPE") {
    //     state = { ...state, newProperty: "smth" }; //adding a new roperty to your state obj
    //
    //     //immutably changing arrays
    //     //map - good for ghanging an item, items, or every item in an array
    //     //filter - removes an item(s) from an array
    //     //concat - combine two or more arrays into one arrays
    //     // ...(spread operator)- copy arrays and objects
    //     //and add properties to those copies
    //     //Object.assign - make copies of objects
    // }
    // if (action.type == "ACTION_TYPE") {
    // }

    let newState = state;

    if (action.type == "RECEIVE_BASKET_INFO") {
        console.log("REDUCE recycLE", action);
        newState = { ...state,  
                        basket: action.basket 
                        
                    };
    }

    if (action.type == "REMOVE_ITEM") {
        console.log("REMOVE ITEM", action);
        const newItems = state.basket.items.filter(item => item.id != action.id);
        const costsArr = newItems.map(item =>item.cost);
        const newSubtotal = sum(costsArr);
        const newVat = 0.2*newSubtotal; 
        const newTotal = newSubtotal + newVat; 
        newState = {
            ...state,
            basket: {
                ...state.basket,
                items: newItems,
                subtotal: newSubtotal,
                vat: newVat,
                total: newTotal
            },
            
        };
    }

    console.log("New State", newState);
    return newState;
}