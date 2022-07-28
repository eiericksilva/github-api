import Layout from "./components/layout/Layout.js";
import Profile from "./components/profile/Profile.js";
import ResetCss from "./global/ResetCss.js";
import Repositories from "./components/repositories/Repositories.js";
import GithubProvider from "./providers/githubProvider.js";


const App = () => {
  return (
    <>
      <GithubProvider>
        <ResetCss/>
        <Layout>
          <Profile/>
          <Repositories/>
        </Layout>
      </GithubProvider>
    </>
  );
}

export default App;
