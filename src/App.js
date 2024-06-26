import {
  DynamicWidget,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <DynamicWidget />
  </DynamicContextProvider>
);

export default App;
