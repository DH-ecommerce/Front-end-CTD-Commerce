import ViewportProvider from './hooks/ViewportProvider';
import RouteList from './routes';

function App() {
  return (
    <ViewportProvider>
      <RouteList />
    </ViewportProvider>
  );
}

export default App;
