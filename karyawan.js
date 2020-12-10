let sql = "";
const route = (app, db) => {
  app.post("/karyawan", (req, res) => {
    sql = "insert into karyawan set ?";

    db.query(sql,req.body,  async (err, data) => {
      try {
        await res.send("Data Inserted!");
      } catch (error) {
        throw error;
      }
    });
  });

  //ゲット-->>

  app.get("/karyawan", (req, res) => {
    sql = "select * from karyawan";
    db.query(sql, async (req, data) => {
      try {
        await res.send(data);
      } catch (error) {
        throw error;
      }
    });
  });

  //プット-->>

  app.put("/karyawan/:id", (req, res) => {
    id = req.params.id;
    sql = `update karyawan set ? where id_karyawan = ${id}`;
    db.query(sql, req.body, (err, data) => {
      try {
        res.send(`Updated data with id ${id}`);
      } catch (error) {
        throw error;
      }
    });
  });

  //出れっと-->>

  app.delete("/karyawan/:id", (req, res) => {
    id = req.params.id;
    sql = `delete from karyawan where id_karyawan = ${id}`
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