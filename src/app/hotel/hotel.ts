export class Hotel {
    id: number;
    name: string = '';
    reviews: any[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
