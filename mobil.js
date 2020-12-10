let sql = "";
const route = (app, db) => {
  app.post("/mobil", (req, res) => {
    sql = "insert into mobil set ?";
    const params = {
      nomor_mobil: req.body.nomor_mobil,
      merk: req.body.merk,
      jenis: req.body.jenis,
      warna: req.body.warna,
      tahun_pembuatan: req.body.tahun_pembuatan,
      biaya_sewa_per_hari: Number(req.body.biaya_sewa_per_hari),
      image: req.body.image,
    };

    db.query(sql, params, (err, data) => {
      try {
        res.send("Data inserted! ");
      } catch (error) {
        throw error;
      }
    });
  });

  app.get("/mobil", (req, res) => {
    sql = "select * from mobil";
    db.query(sql, async (req, data) => {
      try {
        await res.send(data);
      } catch (error) {
        throw error;
      }
    });
  });

  app.get("/mobil/:id", (req, res) => {
    id = req.params.id;
    sql = `select * from mobil where id_mobil = ${id}`;
    db.query(sql, async (req, data) => {
      try {
        await res.send(data);
      } catch (error) {
        throw error;
      }
    });
  });

  app.put("/mobil/:id", (req, res) => {
    id = req.params.id;
    sql = `update mobil set ? where id_mobil = ${id}`;
    db.query(sql, req.body, (err, data) => {
      try {
        res.send(`Updated data with id ${id}`);
      } catch (error) {
        throw error;
      }
    });
  });

  app.delete("/mobil/:id", (req, res) => {
    id = req.params.id;
    sql = `delete from mobil where id_mobil = ${id}`;
    db.query(sql, async (err, data) => {
      try {
        await res.send(`Deleted data with id ${id}`);
      } catch (error) {
        throw error;
      }
    });
  });
};
module.exports = route;

//こんそぇ　ぉー