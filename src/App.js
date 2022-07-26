import Layout from "./components/layout/Layout.js";
import Profile from "./components/profile/Profile.js";
import ResetCss from "./global/ResetCss.js";

const App = () => {
  return (
    <>
      <ResetCss/>
      <Layout>
        <Profile/>
        <br></br>
        <br></br>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </>
  );
}

export default App;
