import { DigitalArt } from '../models/digital-art';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { artStorage } from '../storage/art-storage';

export class DigitalArtController {
    async purchaseArt(data) {
        if (!data.artId || !data.buyer) {
            return await RollupStateHandler.handleReport({
                error: 'Art ID and buyer address must be provided.',
            });
        }

        const art = artStorage.getOneById(data.artId);

        if (!art.id) {
            return await RollupStateHandler.handleReport({
                error: `Art not found for id '${data.artId}'`,
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            art.purchase(data.buyer);
            artStorage.updateOne(art);

            return {
                ok: true,
                message: `Art purchased successfully by '${data.buyer}'!`,
                data: art.getData(),
            };
        });
    }

    async verifyOwnership(data) {
        const artId = data[0];
        const storageRequest = artStorage.getOneById(artId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Art not found for id '${artId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            owner: storageRequest.owner,
        }));
    }
}
