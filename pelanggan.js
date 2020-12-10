let sql = "";
const route = (app, db) => {
  app.post("/pelanggan", (req, res) => {
    sql = "insert into pelanggan set ?";

    db.query(sql,req.body,  async (err, data) => {
      try {
        await res.send("Data Inserted!");
      } catch (error) {
        throw error;
      }
    });
  });

  app.get("/pelanggan", (req, res) => {
    sql = "select * from pelanggan";
    db.query(sql, async (req, data) => {
      try {
        await res.send(data);
      } catch (error) {
        throw error;
      }
    });
  });

  app.get("/pelanggan/:id", (req, res) => {
    id = req.params.id;
    sql = `select * from pelanggan where id_pelanggan = ${id}`;
    db.query(sql, async (req, data) => {
      try {
        await res.send(data);
      } catch (error) {
        throw error;
      }
    });
  });

  //ルノー　ERROR　じゃない

  app.put("/pelanggan/:id", (req, res) => {
    id = req.params.id;
    sql = `update pelanggan set ? where id_pelanggan = ${id}`;
    db.query(sql, req.body, (err, data) => {
      try {
        res.send(`Updated data with id ${id}`);
      } catch (error) {
        throw error;
      }
    });
  });

  app.delete("/pelanggan/:id", (req, res) => {
    id = req.params.id;
    sql = `delete from pelanggan where id_pelanggan = ${id}`
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
