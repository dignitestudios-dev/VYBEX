"use client";

import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "How is my information protected on Vybex?",
    answer:
      "At Vybex, your privacy and data security are top priorities. We use end-to-end encryption, secure cloud infrastructure, and regular compliance checks to ensure that your personal information, activity, and payment data remain safe and protected at all times.",
  },
  {
    id: 2,
    question:
      "Does Vybex offer monetization to content creators? If so, what is needed to start monetizing on Vybex?",
    answer: `Yes! Vybex supports content creators through paid live streams and Vybex Coins. To start monetizing, creators must:
• Link a secure payout method (e.g., bank or digital wallet)
• Comply with our content guidelines and community standards
Once verified, you can begin earning through paid lives and supporter contributions.`,
  },
  {
    id: 3,
    question: "What is Vybex for and who is it for?",
    answer:
      "Vybex is a next-gen social media platform built for creators, trendsetters, and communities that love to share real-time experiences. Whether you're posting everyday moments, creating polls, or hosting exclusive livestreams — Vybex is for anyone who wants to connect, express, and earn, all in one place.",
  },
  {
    id: 4,
    question:
      "How are payments made to content creators that generate revenue using Vybex?",
    answer:
      "Revenue earned through Vybex (via coins or paid live streams) can be withdrawn to the creator’s linked payout method. You can track your earnings and manage withdrawals directly in your profile’s Wallet.",
  },
  {
    id: 5,
    question:
      "How can I purchase coins on Vybex and where can I see the remainder of my coins?",
    answer:
      "You can buy Vybex Coins securely using credit/debit cards from your profile. To view your balance, just go to the Wallet under your account settings.",
  },
  {
    id: 6,
    question: "What is needed to make a profile on Vybex?",
    answer: `Creating a Vybex profile is simple. You’ll need:
• A valid email or phone number.
• A unique username and password.
• A profile photo and short bio to personalize your page.
 You can start browsing or posting as soon as you sign up!`,
  },
  {
    id: 7,
    question: "Is Vybex worldwide or just in the United States?",
    answer: `Vybex is a global platform. While it’s currently most active in the United States, anyone around the world can join, post, and livestream.`,
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className=" min-h-screen text-white px-6 py-24 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[40px] lg:text-[51.88px] font-[600] text-center mb-12">
          Frequently Asked Questions
        </h2>

        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-[#16161F] rounded-4xl mb-4 p-6 transition-all duration-300"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggle(item.id)}
            >
              <h3 className="text-[18px] font-[400] text-white">
                <span
                  className="font-bold"
                  style={{
                    background: "linear-gradient(to right, #D0090B, #0000FE)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {item.id}.
                </span>{" "}
                {item.question}
              </h3>
              <span
                className="text-2xl"
                style={{
                  background:
                    openId === item.id
                      ? "linear-gradient(to right, #D0090B, #0000FE)"
                      : "none",
                  WebkitBackgroundClip: openId === item.id ? "text" : "none", // Only apply clip when expanded
                  backgroundClip: openId === item.id ? "text" : "none",
                  color: openId === item.id ? "transparent" : "inherit", // Make text transparent for gradient
                }}
              >
                {openId === item.id ? "✕" : "+"}
              </span>
            </div>
            {openId === item.id && (
              <p className="text-[#C8C8C8] mt-4 whitespace-pre-line">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
