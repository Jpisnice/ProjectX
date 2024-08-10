"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const button_1 = require("@/components/ui/button");
const input_1 = require("@/components/ui/input");
const textarea_1 = require("@/components/ui/textarea");
const card_1 = require("@/components/ui/card");
const select_1 = require("@/components/ui/select");
const scroll_area_1 = require("@/components/ui/scroll-area"); // Import ScrollArea and ScrollBar
const UploadPage = () => {
    const [selectedFile, setSelectedFile] = (0, react_1.useState)(null);
    const [previewURL, setPreviewURL] = (0, react_1.useState)(null);
    const [caption, setCaption] = (0, react_1.useState)("");
    const [wardName, setWardName] = (0, react_1.useState)("");
    const [location, setLocation] = (0, react_1.useState)("");
    const [issueTitle, setIssueTitle] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const previewURL = URL.createObjectURL(file);
            setSelectedFile(file);
            setPreviewURL(previewURL);
        }
    };
    const handleUpload = () => {
        if (selectedFile) {
            console.log("Uploading file:", selectedFile.name);
            console.log("Caption:", caption);
            console.log("Ward Name:", wardName);
            console.log("Location in Ward:", location);
            console.log("Issue Title:", issueTitle);
            console.log("Description of Issue:", description);
            // Upload logic here, including file and other form data
        }
    };
    const handleRemove = () => {
        setSelectedFile(null);
        setPreviewURL(null);
        setCaption("");
        setWardName("");
        setLocation("");
        setIssueTitle("");
        setDescription("");
    };
    return (<scroll_area_1.ScrollArea className="w-full h-screen"> {/* Add ScrollArea here */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <card_1.Card className={`w-full max-w-2xl shadow-lg ${previewURL ? 'aspect-auto' : 'h-auto'}`}>
          <card_1.CardHeader>
            <card_1.CardTitle className="text-center text-2xl font-bold">Create a New Post</card_1.CardTitle>
          </card_1.CardHeader>
          <card_1.CardContent>
            <div className="flex flex-col items-center">
              {!selectedFile ? (<label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 hover:border-blue-500 transition duration-200 ease-in-out">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V6a4 4 0 014-4h2a4 4 0 014 4v10m5 4H3m14-4v4m-4-4v4"></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  <input_1.Input type="file" accept="image/*" className="hidden" onChange={handleFileChange}/>
                </label>) : (<>
                  <div className="w-full mb-4">
                    {previewURL && (<img src={previewURL} alt="Preview" className="object-cover w-full h-full rounded-lg" style={{ aspectRatio: '1 / 1' }}/>)}
                  </div>

                  <textarea_1.Textarea value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Write a caption..." className="w-full mb-4" rows={2}/>

                  <select_1.Select onValueChange={(value) => setWardName(value)}>
                    <select_1.SelectTrigger className="w-full mb-4">
                      <select_1.SelectValue placeholder="Select Ward"/>
                    </select_1.SelectTrigger>
                    <select_1.SelectContent>
                      <select_1.SelectItem value="Ward 1">Ward 1</select_1.SelectItem>
                      <select_1.SelectItem value="Ward 2">Ward 2</select_1.SelectItem>
                      <select_1.SelectItem value="Ward 3">Ward 3</select_1.SelectItem>
                      {/* Add more wards as needed */}
                    </select_1.SelectContent>
                  </select_1.Select>

                  <input_1.Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location in Ward" className="w-full mb-4"/>

                  <input_1.Input type="text" value={issueTitle} onChange={(e) => setIssueTitle(e.target.value)} placeholder="Issue Title" className="w-full mb-4"/>

                  <textarea_1.Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description of Issue" className="w-full mb-4" rows={3}/>
                </>)}

              {selectedFile && (<>
                  <button_1.Button onClick={handleUpload} className="w-full bg-blue-500 text-white hover:bg-blue-600">
                    Upload
                  </button_1.Button>

                  <button_1.Button onClick={handleRemove} className="mt-2 w-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                    Remove
                  </button_1.Button>
                </>)}
            </div>
          </card_1.CardContent>
        </card_1.Card>
      </div>
      <scroll_area_1.ScrollBar orientation="vertical"/> {/* Add ScrollBar for vertical scrolling */}
    </scroll_area_1.ScrollArea>);
};
exports.default = UploadPage;
