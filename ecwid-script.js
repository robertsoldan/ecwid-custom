let ec = window.ec;

// Initialize extra fields
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};


// Add pickup time selection for customer
ec.order.extraFields.ecwid_delivery_time = {
    'title': 'What time should we deliver the package?',
    'required': false,
    'type': 'datetime',
    'checkoutDisplaySection': 'shipping_address',
    'orderDetailsDisplaySection': 'order_comments'
}

Ecwid.refreshConfig();
