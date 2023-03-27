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
    <div class="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas
      accusantium explicabo illo autem provident alias impedit, officiis
      accusamus excepturi deleniti sapiente ab voluptatem, delectus quae,
      cupiditate beatae quam in.
    </div>
  );
};
