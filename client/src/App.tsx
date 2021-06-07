import { ApolloProvider } from "@apollo/client";
import Home from "./src/pages/Home";
import client from "./src/services/graphql/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default App;