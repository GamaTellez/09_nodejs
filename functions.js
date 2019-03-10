module.exports = {
    shipping_math: function calc_shipping_rate(request, response) {
        const item_weight = request.query.weight;
        const item_type = request.query.item_type;
        
        var cost = 0.00;
        switch (item_type) {
            case "Letters (Stamped)":
                if (item_weight <= 1) { cost = 0.55; break }
                if (item_weight <= 2) { cost = 0.70; break }
                if (item_weight <= 3) { cost = 0.85; break }
                if (item_weight <= 3.5) { cost = 1.00; break }
                break;
            case "Letters (Metered)":
                if (item_weight <= 1) { cost = 0.50; break }
                if (item_weight <= 2) { cost = 0.65; break }
                if (item_weight <= 3) { cost = 0.80; break }
                if (item_weight <= 3.5) { cost = 0.95; break }
                break;
            case "Large Envelopes (Flats)":
                if (item_weight <= 1) { cost = 1.00; break }
                if (item_weight <= 2) { cost = 1.15; break }
                if (item_weight <= 3) { cost = 1.30; break }
                if (item_weight <= 4) { cost = 1.45; break }
                if (item_weight <= 5) { cost = 1.60; break }
                if (item_weight <= 6) { cost = 1.75; break }
                if (item_weight <= 7) { cost = 1.90; break }
                if (item_weight <= 8) { cost = 2.05; break }
                if (item_weight <= 9) { cost = 2.20; break }
                if (item_weight <= 10) { cost = 2.35; break }
                if (item_weight <= 11) { cost = 2.50; break }
                if (item_weight <= 12) { cost = 2.65; break }
                if (item_weight <= 13) { cost = 2.80; break }
                break;
            case "First Class Service - Retail":
                if (item_weight <= 1) { cost = 3.66; break }
                if (item_weight <= 2) { cost = 3.66; break }
                if (item_weight <= 3) { cost = 3.66; break }
                if (item_weight <= 4) { cost = 3.66; break }
                if (item_weight <= 5) { cost = 4.39; break }
                if (item_weight <= 6) { cost = 4.39; break }
                if (item_weight <= 7) { cost = 4.39; break }
                if (item_weight <= 8) { cost = 4.39; break }
                if (item_weight <= 9) { cost = 5.19; break }
                if (item_weight <= 10) { cost = 5.19; break }
                if (item_weight <= 11) { cost = 5.19; break }
                if (item_weight <= 12) { cost = 5.19; break }
                if (item_weight <= 13) { cost = 5.71; break }
                break;
            default:
        }
            var params = {cost: cost, item_type: item_type, item_weight: item_weight };
            response.render('./total_view', params);
    }
};