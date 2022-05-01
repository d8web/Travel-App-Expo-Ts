import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import MainStack from "./src/stacks/MainStack";

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={store}>
                <NavigationContainer>
                        <MainStack/>
                </NavigationContainer>
            </Provider>
        </GestureHandlerRootView>
    );
}

export default App;