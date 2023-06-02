const { advertisementService } = require('../../service');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const advertisements = await advertisementService.getAll();

      res.json(advertisements);
    } catch (e) {
      next(e);
    }
  },
  findById: async (req, res, next) => {
    try {
      const advertisement = await advertisementService.getById();

      res.json(advertisement);
    } catch (e) {
      next(e);
    }
  },
  updatedAt: async (req, res, next) => {
    try {
      const newAdvertInfo = req.body;
      const advertId = req.params.advertId;

      const advertisement = await advertisementService.updateAdvert(advertId, newAdvertInfo);

      res.status(201).json(advertisement);
    } catch (e) {
      next(e);
    }
  },
  create: async (req, res, next) => {
    try {
      const advertisement = await advertisementService.created(req.body);

      res.status(201).json(advertisement);
    } catch (e) {
      next(e);
    }
  },
  deleteAdvertOne: async (req, res, next) => {
    try {
      await advertisementService.deleteOne({ _id: req.params.advertId });

      res.status(201).json('ok');
    } catch (e) {
      next(e);
    }
  },
  deleteAdvertMany: async (req, res, next) => {
    try {
      await advertisementService.deleteMany({ _id: req.params.advertId });

      res.status(201).json('ok');
    } catch (e) {
      next(e);
    }
  }
}
