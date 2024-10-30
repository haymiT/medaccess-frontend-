export interface Inventory {
    inventory_id: number;
    // name: string;
    pharmacy_id: number;
    medication_id: number;
    quantity: number;
    unit_price: number;
    manufacturer: string;
    manufacturing_date: string;
    expiration_date: string;
    shelf_number: string;
    bin_card: string;
    score_card: string;
    dosage_unit: string;
    dosage_value: number;
}
