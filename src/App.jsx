import { BrowserRouter } from "react-router-dom"
import PostRouter from "./router/PostRouter.jsx"
import AuthRouter from "./router/AuthRouter.jsx"

function App() {

  return (
    <BrowserRouter>
      <AuthRouter/>
      <PostRouter/>
    </BrowserRouter>
  )
}

export default App
