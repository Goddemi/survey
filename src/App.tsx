import Layout from "./layout/Layout";
import AppProvider from "./provider/AppProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AppProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AppProvider>
  );
}

export default App;
