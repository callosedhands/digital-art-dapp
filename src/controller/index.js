import { DigitalArtController } from "./digital-art-controller";
import { MarketplaceController } from "./marketplace-controller";

const marketplaceController = new MarketplaceController();
const digitalArtController = new DigitalArtController();

export const controller = {
  listArt: marketplaceController.listArt,
  getAllArt: marketplaceController.getAllArt,
  getArtById: marketplaceController.getArtById,
  purchaseArt: digitalArtController.purchaseArt,
  verifyOwnership: digitalArtController.verifyOwnership,
};
