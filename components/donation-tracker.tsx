"use client";

import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import type { DonationBalance } from "@/lib/donation";

function currency(value: number) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

function eth(value: number) {
  return `${value.toLocaleString("en-US", {
    maximumFractionDigits: 5,
  })} ETH`;
}

const fallbackBalance: DonationBalance = {
  ethBalance: 0,
  ethUsdPrice: 0,
  usdValue: 0,
  goalUsd: siteConfig.donation.donationGoalUsd,
  percentComplete: 0,
  remainingUsd: siteConfig.donation.donationGoalUsd,
  walletAddress: siteConfig.donation.donationWallet,
  lastUpdated: new Date().toISOString(),
  source: "fallback",
};

export function DonationTracker({ compact = false }: { compact?: boolean }) {
  const [data, setData] = useState<DonationBalance>(fallbackBalance);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function loadBalance(showLoading = true) {
    try {
      if (showLoading) {
        setStatus("loading");
      }
      const response = await fetch("/api/donation-balance", {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Donation API failed");
      }
      const payload = (await response.json()) as DonationBalance;
      setData(payload);
      setStatus(payload.source === "fallback" ? "error" : "ready");
    } catch {
      setData(fallbackBalance);
      setStatus("error");
    }
  }

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void loadBalance(false);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsModalOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  const etherscanWalletUrl = useMemo(
    () => `${siteConfig.donation.etherscanBaseUrl}/address/${data.walletAddress}`,
    [data.walletAddress],
  );

  async function copyWallet() {
    await navigator.clipboard.writeText(data.walletAddress);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="donation-section" id="donate">
      <div className="container donation-layout">
        <div className="reveal">
          <p className="eyebrow">Community Fund</p>
          <h2 className="section-title">{siteConfig.donation.donationTitle}</h2>
          <p className="section-lede">{siteConfig.donation.donationDescription}</p>
          <p className="section-lede">
            Once a goal is reached, SleepyHeads will help nominate and review
            possible ME/CFS-related donation destinations. Non-holders are
            welcome to suggest ideas and join the discussion. Holders will make
            the official decision through a future holder-only voting system.
          </p>
          {!compact && (
            <div className="grid two">
              <div className="vote-card">
                <h3>Transparent by design</h3>
                <p>
                  Funds are held in a public Ethereum wallet. Anyone can verify
                  the wallet balance and transaction history on-chain.
                </p>
              </div>
              <div className="vote-card">
                <h3>Careful by design</h3>
                <p>
                  This site never connects to wallets or takes custody. Donations
                  are sent directly by the donor from their own Ethereum wallet
                  on Ethereum mainnet only.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="donation-panel reveal" aria-live="polite">
          <div className="status-line">
            {status === "loading" && "Updating wallet balance..."}
            {status === "ready" &&
              `Updated ${new Date(data.lastUpdated).toLocaleString()}`}
            {status === "error" &&
              "Live balance is temporarily unavailable. Showing safe fallback values."}
          </div>
          <h3>Goal: {currency(data.goalUsd)} USD in ETH</h3>
          <div className="progress-shell" aria-label="Donation progress">
            <div
              className="progress-fill"
              style={{ width: `${Math.max(data.percentComplete, 0.7)}%` }}
            />
          </div>
          <div className="donation-stats">
            <div className="donation-stat">
              <span>Raised so far</span>
              <strong>
                {currency(data.usdValue)} / {currency(data.goalUsd)}
              </strong>
            </div>
            <div className="donation-stat">
              <span>Progress</span>
              <strong>{data.percentComplete.toFixed(1)}%</strong>
            </div>
            <div className="donation-stat">
              <span>ETH balance</span>
              <strong>{eth(data.ethBalance)}</strong>
            </div>
            <div className="donation-stat">
              <span>Remaining</span>
              <strong>{currency(data.remainingUsd)}</strong>
            </div>
          </div>
          <p className="fine-print">
            ETH/USD value is approximate and changes with market price.
            {data.ethUsdPrice > 0
              ? ` Current estimate: ${currency(data.ethUsdPrice)} per ETH.`
              : " Price data could not be loaded right now."}
          </p>
          <div className="wallet-row">
            <code title={data.walletAddress}>{data.walletAddress}</code>
            <button className="button" onClick={copyWallet} type="button">
              {copied ? "Copied" : "Copy wallet"}
            </button>
          </div>
          <div className="actions">
            <button
              className="button primary"
              onClick={() => setIsModalOpen(true)}
              type="button"
            >
              Donate ETH
            </button>
            <a
              className="button"
              href={etherscanWalletUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              View on Etherscan
            </a>
            <button
              className="button coffee"
              onClick={() => {
                void loadBalance();
              }}
              type="button"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsModalOpen(false);
          }}
          role="presentation"
        >
          <div aria-labelledby="donate-modal-title" className="modal" role="dialog">
            <div className="modal-header">
              <div>
                <p className="eyebrow">Public donation wallet</p>
                <h2 id="donate-modal-title">Donate ETH Directly</h2>
              </div>
              <button
                aria-label="Close donation instructions"
                className="icon-button"
                onClick={() => setIsModalOpen(false)}
                type="button"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <p>
                You can donate by sending ETH directly to the Always Tired NFTs
                public donation wallet.
              </p>
              <div className="wallet-row">
                <code>{data.walletAddress}</code>
                <button className="button" onClick={copyWallet} type="button">
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <ol>
                <li>Copy the donation wallet above.</li>
                <li>Open your Ethereum wallet.</li>
                <li>Send ETH on Ethereum mainnet only.</li>
                <li>Carefully confirm the full wallet address before submitting.</li>
                <li>
                  Once sent, the transaction will be publicly visible on
                  Etherscan and cannot be reversed.
                </li>
              </ol>
              <ul>
                <li>Only send ETH on Ethereum mainnet.</li>
                <li>Always double-check the full wallet address before sending.</li>
                <li>
                  Never send from an exchange or network unless you are fully
                  sure it supports Ethereum mainnet withdrawals to this address.
                </li>
                <li>
                  This site does not connect wallets and does not ask users to
                  sign anything to donate.
                </li>
              </ul>
              <div className="actions">
                <a
                  className="button primary"
                  href={etherscanWalletUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View wallet on Etherscan
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
