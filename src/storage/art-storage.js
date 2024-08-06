class ArtStorage {
    artPieces;

    constructor() {
        this.artPieces = new Map();
    }

    getAll() {
        return Array.from(this.artPieces.values());
    }

    addOne(art) {
        this.artPieces.set(art.id, art);
    }

    getOneById(id) {
        return this.artPieces.get(id);
    }

    updateOne(art) {
        this.artPieces.set(art.id, art);
    }
}

export const artStorage = new ArtStorage();
