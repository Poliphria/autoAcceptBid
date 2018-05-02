console.log('Extension Loaded.')

// every 5 seconds check to see if there's a work order, if so, click it 
const interval = setInterval(function(){
    // get list of work orders
    let workOrders = document.getElementsByClassName('link-record')

    // if the workOrder list is empty, reload the page. Else, click the first work order    
    if (isEmpty(workOrders)) {
        console.log('work orders empty. reloading webpage....')
        location.reload()
    }
    else {
        console.log('work order clicked!')
    }
}, 7000)

/**
 * Checks if the object passed into the function is empty 
 * @param {Object} obj 
 */
const isEmpty = function(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}