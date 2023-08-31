import Router from '@/routers/index';
import AuthRouter from '@/routers/utils/authRouter';
function App() {
  return (
    <>
      <AuthRouter>
        <Router></Router>
      </AuthRouter>
    </>
  );
}

export default App;
