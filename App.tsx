import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import MainStack from "./src/stacks/MainStack";

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainStack/>
            </NavigationContainer>
        </Provider>
    );
}

export default App;