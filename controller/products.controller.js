import pool from "../config/db.js"

//Create product

export const createProduct = async (req, res, next) => {
 try {
    const {name, description, price, category, image_url} = req.body;

    if(!name || !price || !category) {
        return res.status(400).json ({
            success: false,
            message: "Name, price and category are required",
        })
    }

    const results = await pool.query(
        `INSERT INTO  products (name, description, price, category, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [name, description, price, category, image_url]
    )
    res.status(201).json({
        success: true,
        data: results.rows[0],
    })

 } catch (error) {
    next(error)
 }    
}



// Get a single product

export const getProduct = async (req, res, next) => {
    try {
   const {id} = req.params
   
   const result = await pool.query(
    `SELECT * FROM products where id = $1`, [id]
   )

   if(result.rows.length === 0) {
    return res.status(404).json({
        success: false,
        message:"Product not found"
    })
   }

   res.status(200).json({
    success: true,
    data: result.rows[0],
   })
    } catch (error) {
        next(error)
    }
}

// // get all product (search + filter)
export const getAllProduct = async (req, res, next) => {
  try {
    const { search, category } = req.query;

    let query = "SELECT * FROM products";
    let values = [];
    let conditions = [];

    if (search) {
      values.push(`%${search}%`);
      conditions.push(`name ILIKE $${values.length}`);
    }

    if (category) {
      values.push(category);
      conditions.push(`category = $${values.length}`);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    const result = await pool.query(query, values);

    res.status(200).json({
      success: true,
      count: result.rows.length + 1,
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
};
