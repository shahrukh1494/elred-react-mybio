import Routing from "./Routing";
import "./App.scss";
import UserContext from "./components/UserContext";

function App() {
  const userCode = "63aad78bb38aa1d755b49561";
  // const userCode = "647722e3546d98d93063bf23";
  // const userCode = "63a5932c6af986350ae42328";
  // const userCode = "64525c7c907fa601fa957648";

  return (
    <div>
      <UserContext.Provider value={{ userCode }}>
        <Routing />
      </UserContext.Provider>
    </div>
  );
}

export default App;
