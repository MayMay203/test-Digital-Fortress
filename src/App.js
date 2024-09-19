import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { publicRoutes } from "./routes"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            const Layout = route.layout
            if (!Layout) {
              return <Route key={index} path={route.path} element={<Page />}></Route>
            } else {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              )
            }
          })}
          <Route path={'/'} element={<Navigate to={'/login'}/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
