import Layout from "./components/layout/Layout.js";
import Profile from "./components/profile/Profile.js";

const App = () => {
  return (
    <>
      <Layout>
        <Profile/>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </>
  );
}

export default App;
