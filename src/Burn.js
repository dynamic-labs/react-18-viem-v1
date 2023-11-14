import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const Burn = () => {
  const { primaryWallet, linkedWallets } = useDynamicContext();

  console.log(linkedWallets, primaryWallet);
  return (
    <>
      {/* <p>{JSON.stringify(linkedWallets)}</p> */}
      <p>{primaryWallet.address}</p>
      <button onClick={() => console.log("click")}></button>
    </>
  );
};

export default Burn;
