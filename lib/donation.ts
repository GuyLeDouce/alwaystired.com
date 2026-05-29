import { siteConfig } from "@/lib/site-config";

export type DonationBalance = {
  ethBalance: number;
  ethUsdPrice: number;
  usdValue: number;
  goalUsd: number;
  percentComplete: number;
  remainingUsd: number;
  walletAddress: string;
  lastUpdated: string;
  source: "live" | "fallback";
};

const fallbackRpcUrl = "https://ethereum.publicnode.com";
const priceUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

function weiHexToEth(hex: string) {
  const wei = BigInt(hex);
  const whole = wei / 10n ** 18n;
  const fraction = wei % 10n ** 18n;
  return Number(`${whole}.${fraction.toString().padStart(18, "0").slice(0, 8)}`);
}

async function getEthBalance(walletAddress: string) {
  const rpcUrl = process.env.ETH_RPC_URL || fallbackRpcUrl;
  const response = await fetch(rpcUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "eth_getBalance",
      params: [walletAddress, "latest"],
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`RPC request failed with status ${response.status}`);
  }

  const payload = (await response.json()) as { result?: string; error?: unknown };
  if (!payload.result || payload.error) {
    throw new Error("RPC response did not include a balance");
  }

  return weiHexToEth(payload.result);
}

async function getEthUsdPrice() {
  const headers: HeadersInit = {};
  if (process.env.COINGECKO_API_KEY) {
    headers["x-cg-demo-api-key"] = process.env.COINGECKO_API_KEY;
  }

  const response = await fetch(priceUrl, {
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Price request failed with status ${response.status}`);
  }

  const payload = (await response.json()) as {
    ethereum?: { usd?: number };
  };
  const price = payload.ethereum?.usd;
  if (!price) {
    throw new Error("Price response did not include ETH/USD");
  }
  return price;
}

export async function getDonationBalance(): Promise<DonationBalance> {
  const walletAddress = siteConfig.donation.donationWallet;
  const goalUsd = siteConfig.donation.donationGoalUsd;

  try {
    const [ethBalance, ethUsdPrice] = await Promise.all([
      getEthBalance(walletAddress),
      getEthUsdPrice(),
    ]);
    const usdValue = ethBalance * ethUsdPrice;
    const percentComplete = Math.min((usdValue / goalUsd) * 100, 100);

    return {
      ethBalance,
      ethUsdPrice,
      usdValue,
      goalUsd,
      percentComplete,
      remainingUsd: Math.max(goalUsd - usdValue, 0),
      walletAddress,
      lastUpdated: new Date().toISOString(),
      source: "live",
    };
  } catch {
    return {
      ethBalance: 0,
      ethUsdPrice: 0,
      usdValue: 0,
      goalUsd,
      percentComplete: 0,
      remainingUsd: goalUsd,
      walletAddress,
      lastUpdated: new Date().toISOString(),
      source: "fallback",
    };
  }
}
