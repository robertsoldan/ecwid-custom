 Ecwid.OnPageLoad.add(function(page) {

// Initialize extra fields
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add pickup time selection for customer
ec.order.extraFields.ecwid_pickup_time = {
    'title': '_msg_ShippingDetails.pickup.customer_header',
    'required': true,
    'type': 'datetime',
    'checkoutDisplaySection': 'pickup_details',
    'orderDetailsDisplaySection': 'payment_details',
}

});


//Ecwid.refreshConfig();

