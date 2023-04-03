import { onMount } from "solid-js";
import { useNavigate } from "solid-start";

export default () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function authCheck() {
    if (!token) {
      navigate("/login", {
        replace: true,
      });
    }
  }

  onMount(() => {
    authCheck();
  });

  return (
    <>
      <div class="p-6 rounded bg-white shadow mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas
        accusantium explicabo illo autem provident alias impedit, officiis
        accusamus excepturi deleniti sapiente ab voluptatem, delectus quae,
        cupiditate beatae quam in.
      </div>
      <div class="p-6 rounded bg-white shadow mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas
        accusantium explicabo illo autem provident alias impedit, officiis
        accusamus excepturi deleniti sapiente ab voluptatem, delectus quae,
        cupiditate beatae quam in. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Sint repellat inventore, cum ad consequatur amet
        facilis officia adipisci debitis ut esse laboriosam dolore atque qui?
        Vel reprehenderit voluptatem praesentium deserunt. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Perferendis deleniti debitis laborum
        vel. Incidunt asperiores assumenda dolore aut quis dolorum. Ad
        reprehenderit placeat officiis vitae illum aliquam assumenda dolorum
        quia.
      </div>
    </>
  );
};
