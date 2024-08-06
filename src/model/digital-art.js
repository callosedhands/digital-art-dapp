import crypto from 'node:crypto';

export class DigitalArt {
    id;
    owner;
    listedAt;
    title;
    description;
    price;
    imageUrl;

    constructor({ owner, title, description, price, imageUrl }) {
        this.id = crypto.randomUUID();
        this.owner = owner;
        this.listedAt = Date.now();
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    getData() {
        return {
            id: this.id,
            owner: this.owner,
            listedAt: this.listedAt,
            title: this.title,
            description: this.description,
            price: this.price,
            imageUrl: this.imageUrl,
        };
    }

    purchase(newOwner) {
        this.owner = newOwner;
    }
}
