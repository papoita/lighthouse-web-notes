const getAllProperties = function (options, limit = 10) {
  let sql = `
    SELECT properties.*, AVG(property_reviews.rating) as average_rating
    FROM properties
    JOIN property_reviews ON properties.id = property_id
    WHERE TRUE`;
  const values = [];

  if (options.city) {
    values.push(`%${options.city}%`);
    sql += ` AND city LIKE $${values.length}`;
  }
  if (options.owner_id) {
    values.push(`%${options.owner_id}%`);
    sql += ` AND owner_id = $${values.length}`;
  }
  if (options.minimum_price_per_night) {
    //database stores in cents multiply by 100
    values.push(`${options.minimum_price_per_night * 100}`);
    sql += ` AND cost_per_night >= $${values.length}`;
  }
  if (options.maximum_price_per_night) {
    values.push(`${options.maximum_price_per_night * 100}`);
    sql += ` AND cost_per_night <= $${values.length}`;
  }

  sql += ` GROUP BY properties.id`;

  if (options.minimum_rating) {
    values.push(`${options.minimum_rating}`);
    sql += ` HAVING AVG(property_reviews.rating) >= $${values.length}`;
  }
  
  values.push(limit);
  sql += `
    ORDER BY cost_per_night
    LIMIT $${values.length}`;

  console.log(sql, values);


  return pool
    .query(sql, values)
    .then(result => {
      return result.rows;
    })
    .catch(err => {
      console.log(err.message);
    });
};

exports.getAllProperties = getAllProperties;
