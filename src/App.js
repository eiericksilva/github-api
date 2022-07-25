import Layout from "./components/layout/Layout.js";

function App() {
  return (
    <>
      <Layout>
        <div>
          <img src="#" alt="Foto do usuário" />
          <h1>Name</h1>
          <h3>Username</h3>
          <span>Lastname</span>
          
          <div>
            <h4>Followers</h4>
            <span>Quantidade de Followers</span>
          </div>
          
          <div>
            <h4>Starreds</h4>
            <span>Quantidade de Followers</span>
          </div>
          
          <div>
            <h4>Followings</h4>
            <span>Quantidade de Followers</span>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </>
  );
}

export default App;
