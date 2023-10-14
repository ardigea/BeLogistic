import express from "express";
import { QueryTypes } from "sequelize";
import Shipp from "../Models/UserModels.js";

const router = express.Router();

// Menambahkan data user
router.post("/api/users", async (req, res) => {
  try {
    console.log(req.body);
    await Shipp.create({
      ReceiversName: req.body.ReceiversName,
      TrackingNumber: req.body.TrackingNumber,
      PhoneNumber: req.body.PhoneNumber,
      PackageWeight: req.body.PackageWeight,
      ServiceOption: req.body.ServiceOption
    });
    res.status(201).json({ msg: "Data paket ditambahkan" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Membaca data user berdasarkan ReceiversName
router.get("/api/users/:ReceiversName", async (req, res) => {
  try {
    const result = await Shipp.sequelize.query(
      'SELECT * FROM shipp u WHERE u.ReceiversName = ?',
      {
        replacements: [req.params.ReceiversName],
        type: QueryTypes.SELECT
      }
    );
    res.status(200).json({ msg: "Data paket ditemukan", result: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Memperbarui data user berdasarkan ReceiversName
router.put("/api/users/:ReceiversName", async (req, res) => {
  try {
    const result = await Shipp.sequelize.query(
      'UPDATE shipp u SET u.TrackingNumber = ?, u.PhoneNumber = ?, u.PackageWeight = ?, u.ServiceOption = ? WHERE u.ReceiversName = ?',
      {
        replacements: [
          req.body.TrackingNumber,
          req.body.PhoneNumber,
          req.body.PackageWeight,
          req.body.ServiceOption,
          req.params.ReceiversName
        ],
        type: QueryTypes.UPDATE
      }
    );
    res.status(200).json({ msg: "Data paket berhasil diperbarui", result: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Menghapus data user berdasarkan ReceiversName
router.delete("/api/users/:ReceiversName", async (req, res) => {
  try {
    const ReceiversName = req.params.ReceiversName;
    const fetchedData = await Shipp.findOne({ where: { ReceiversName: ReceiversName } });
    if (fetchedData) {
      await fetchedData.destroy();
      res.status(200).json({ msg: "Data paket berhasil dihapus" });
    } else {
      res.status(404).json({ msg: "Data paket tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
