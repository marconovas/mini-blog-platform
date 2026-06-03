import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostRouter from "./router/PostRouter.jsx"
import AuthRouter from "./router/AuthRouter.jsx"
import UserRouter from "./router/UserRouter.jsx"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PostRouter />}/>
        <Route path="/auth/*" element={<AuthRouter />}/>
        <Route path="/user/*" element={<UserRouter />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
