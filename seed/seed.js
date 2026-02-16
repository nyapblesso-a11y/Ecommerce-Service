import pool from "../config/db.js";

const seedDatabase = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price NUMERIC(10,2) NOT NULL,
        category VARCHAR(50) NOT NULL,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await pool.query(`
      INSERT INTO products (name, description, price, category, image_url)
      VALUES
        ('Cheese Burger', 'Juicy grilled cheese burger', 8.99, 'Food', 'https://images.unsplash.com/photo-1544037803-ed377ec9a75e?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        ('Fresh Mango Smoothie', 'Blended ripe mangoes with yogurt and honey', 4.50, 'Drinks', "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ('Pepperoni Pizza', 'Wood-fired pizza with mozzarella and pepperoni', 11.99, 'Food', "https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ('Chocolate Cake', 'Rich chocolate cake slice', 5.50, 'Desserts', 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      ON CONFLICT DO NOTHING;
    `);

    console.log(" Products table created and seeded successfully!");
    process.exit(0); // exit the script
  } catch (err) {
    console.error(" Error seeding database:", err);
    process.exit(1);
  }
};

seedDatabase();
