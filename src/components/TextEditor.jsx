import React from "react";

const TextEditor = () => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <textarea
        className="w-full h-64 border-none outline-none resize-none"
        placeholder="Start typing here..."
      ></textarea>
    </div>
  );
};

export default TextEditor;