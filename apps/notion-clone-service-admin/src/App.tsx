import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PageList } from "./page/PageList";
import { PageCreate } from "./page/PageCreate";
import { PageEdit } from "./page/PageEdit";
import { PageShow } from "./page/PageShow";
import { WorkspaceList } from "./workspace/WorkspaceList";
import { WorkspaceCreate } from "./workspace/WorkspaceCreate";
import { WorkspaceEdit } from "./workspace/WorkspaceEdit";
import { WorkspaceShow } from "./workspace/WorkspaceShow";
import { BlockList } from "./block/BlockList";
import { BlockCreate } from "./block/BlockCreate";
import { BlockEdit } from "./block/BlockEdit";
import { BlockShow } from "./block/BlockShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"NotionCloneService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Page"
          list={PageList}
          edit={PageEdit}
          create={PageCreate}
          show={PageShow}
        />
        <Resource
          name="Workspace"
          list={WorkspaceList}
          edit={WorkspaceEdit}
          create={WorkspaceCreate}
          show={WorkspaceShow}
        />
        <Resource
          name="Block"
          list={BlockList}
          edit={BlockEdit}
          create={BlockCreate}
          show={BlockShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
