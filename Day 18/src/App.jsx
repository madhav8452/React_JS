import { Provider } from "react-redux"
import ReduxCrud from "./ReduxCrud"
import store from "./store/store"

function App() {

  return (
    <>
      <Provider store={store}>
        <ReduxCrud/>
      </Provider>
    </>
  )
}

export default App
