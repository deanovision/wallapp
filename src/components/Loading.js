import { Rings } from "react-loader-spinner";
import "../App.css";

const Loading = () => {
  return (
    <main className="center">
      <Rings
        height="250"
        width="250"
        color="#279af1"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </main>
  );
};
export default Loading;
