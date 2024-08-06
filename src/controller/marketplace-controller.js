import { DigitalArt } from '../models/digital-art';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { artStorage } from '../storage/art-storage';

export class MarketplaceController {
    async listArt(data) {
        return await RollupStateHandler.advanceWrapper(() => {
            const newArt = new DigitalArt(data);
            artStorage.addOne(newArt);

            return {
                ok: true,
                message: `Art listed successfully!`,
                data: newArt.getData(),
            };
        });
    }

    async getAllArt() {
        return await RollupStateHandler.inspectWrapper(() =>
            artStorage.getAll()
        );
    }

    async getArtById(data) {
        const artId = data[0];
        const storageRequest = artStorage.getOneById(artId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Art not found for id '${artId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: storageRequest.getData(),
        }));
    }
}
