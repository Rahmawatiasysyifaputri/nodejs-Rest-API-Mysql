let sql = "";
const route = (app, db) => {
  app.post("/sewa", (req, res) => {
    sql = "insert into sewa set ?";

    db.query(sql,req.body,  async (err, data) => {
      try {
        await res.send("Data Inserted!");
      } catch (error) {
        throw error;
      }
    });
  });

  app.get("/sewa", (req, res) => {
    //Complex 眠あ
    // sql = "select * from sewa join mobil on mobil.id_mobil=sewa.id_mobil join karyawan on karyawan.id_karyawan=sewa.id_karyawan join pelanggan on pelanggan.id_pelanggan=sewa.id_pelanggan";
    //Simple　目ぁじゃない
    sql = "select * from sewa mobil"
    db.query(sql, async (req, data) => {
      try {
        await res.send(data);
      } catch (error) {
        throw error;
      }
    });
  });

  app.get("/sewa/:id", (req, res) => {
    id = req.params.id;
    sql = `select * from sewa where id_sewa = ${id}`;
    db.query(sql, async (req, data) => {
      try {
        await res.send(data);
      } catch (error) {
        throw error;
      }
    });
  });

  app.put("/sewa/:id", (req, res) => {
    id = req.params.id;
    sql = `update sewa set ? where id_sewa = ${id}`;
    db.query(sql, req.body, (err, data) => {
      try {
        res.send(`Updated data with id ${id}`);
      } catch (error) {
        throw error;
      }
    });
  });

  app.delete("/sewa/:id", (req, res) => {
    id = req.params.id;
    sql = `delete from sewa where id_sewa = ${id}`
    db.query(sql, async (err,data) => {
      try {
        await res.send(`Deleted data with id ${id}`)        
      } catch (error) { 
        throw error
      }
    })
  });
};
module.exports = route;

//頑張ってください