"use client";

import React, { useState } from "react";

const UploadPage: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewURLs, setPreviewURLs] = useState<string[]>([]);
  const [caption, setCaption] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const filesArray = Array.from(files);
      const previewURLsArray = filesArray.map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFiles(filesArray);
      setPreviewURLs(previewURLsArray);
    }
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      console.log("Uploading files:", selectedFiles.map(file => file.name));
      console.log("Caption:", caption);
      // Upload logic here, including files and caption
    }
  };

  const handleRemove = () => {
    setSelectedFiles([]);
    setPreviewURLs([]);
    setCaption("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-6">Create a New Post</h1>
        
        <div className="flex flex-col items-center">
          {!selectedFiles.length ? (
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16V6a4 4 0 014-4h2a4 4 0 014 4v10m5 4H3m14-4v4m-4-4v4"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF, MP4 up to 10MB</p>
              </div>
              <input type="file" accept="image/*,video/*" multiple className="hidden" onChange={handleFileChange} />
            </label>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {previewURLs.map((url, index) => (
                  <div key={index} className="relative w-full h-24">
                    <img
                      src={url}
                      alt={`Preview ${index}`}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption..."
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </>
          )}

          <button
            onClick={handleUpload}
            disabled={!selectedFiles.length}
            className={`mt-4 w-full py-2 text-white font-semibold rounded-lg ${
              selectedFiles.length
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {selectedFiles.length ? "Upload" : "Select files to upload"}
          </button>

          {selectedFiles.length > 0 && (
            <button
              onClick={handleRemove}
              className="mt-2 w-full py-2 text-gray-600 font-semibold rounded-lg bg-gray-200 hover:bg-gray-300"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
