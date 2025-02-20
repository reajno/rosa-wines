import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

const handler = async (req, res) => {
  try {
    const { data: products, error } = await supabase.from("products").select(`
        id, name, description, slug, type, image, price, 
        reviews(rating, comment, date, reviewer_name, reviewer_email)
        `);

    if (error) throw error;

    const productsWithReviews = products.map((product) => {
      const ratings = product.reviews.map((review) => review.rating);
      const avgRating =
        ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

      return {
        ...product,
        average_rating: parseFloat(avgRating.toFixed(1)),
        reviews: product.reviews,
      };
    });

    res.status(200).json({ products: productsWithReviews });
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching products" });

    throw error;
  }
};

export default handler;
