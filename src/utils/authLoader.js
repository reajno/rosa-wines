import { redirect } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";

const authLoader = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw redirect("/login");
  }
};

export default authLoader;
