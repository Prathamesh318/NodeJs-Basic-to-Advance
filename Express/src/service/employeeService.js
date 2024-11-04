import mysql from "mysql2";

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "31082003@Pv",
  database: "db",
});

connection.connect();

export const getAllEmployees = (req, res) => {
  connection.query("select * from employee", (error, result) => {
    if (error) {

      console.log(error);
      res.json({ message: "error in getting information" });
    } else {
      res.json({message:"Data retrieved",result});
    }
  });
};

export const addEmployee = (req, res) => {
    try {
        const data = req.body;

        // Use parameterized queries to safely insert values
        connection.query(
            "INSERT INTO employee (name, age, salary) VALUES (?, ?, ?)",
            [data.name, data.age, data.salary],
            (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({
                        success: false,
                        message: "Cannot be inserted"
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: "Created",
                    data: data
                });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An unexpected error occurred"
        });
    }
};

