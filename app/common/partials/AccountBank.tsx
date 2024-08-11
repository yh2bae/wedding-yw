import React, { useState } from "react";

const AccountBank = ({
  bank,
  number,
  name,
}: {
  bank: string;
  number: string;
  name: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(number);
        setIsCopied(true);
      } catch (error) {
        console.error("Failed to copy text to clipboard", error);
      }
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = number;
      // Prevent the textarea from being visible or affecting the page layout
      textArea.style.position = "fixed"; // Prevent scrolling to the textarea
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.width = "1px";
      textArea.style.height = "1px";
      textArea.style.padding = "0";
      textArea.style.border = "none";
      textArea.style.outline = "none";
      textArea.style.boxShadow = "none";
      textArea.style.background = "transparent";

      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
      } catch (error) {
        console.error("Fallback: Failed to copy text to clipboard", error);
      }
      document.body.removeChild(textArea);
    }

    setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div className="relative max-w-xs p-6 bg-gray-50 shadow-md rounded-lg border-l-4 border-[#06a1da]">
      <p className="text-lg font-semibold text-[#06a1da]">{bank}</p>
      <p className="text-2xl font-bold tracking-wide text-gray-700">{number}</p>
      <p className="text-sm text-gray-600">a/n {name}</p>
      <button
        onClick={handleCopyClick}
        className="mt-4 text-[0.75rem] text-[#06a1da] border border-[#06a1da] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
      >
        {isCopied ? "Tersalin" : "Salin No. Rek"}
      </button>
    </div>
  );
};

export default AccountBank;
