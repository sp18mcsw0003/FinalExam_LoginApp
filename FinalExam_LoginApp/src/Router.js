import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import Home from "./components/Home";
// import EmployeeList from "./components/EmployeeList";
// import EmployeeCreate from "./components/EmployeeCreate";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={Home}
            title="Blood Bank"
            initial
          />
        </Scene>
        {/* <Scene key="main">
          <Scene  
            key="employeeList"
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            component={EmployeeList}
            title="Employees"
          />
          <Scene
            key="employeeCreate"
            title="Add Employee"
            component={EmployeeCreate}
          />
        </Scene> */}
      </Scene>
    </Router>
  );
};

export default RouterComponent;
