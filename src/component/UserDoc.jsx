import React, { useState } from 'react';

export default function UserDoc() {
  const [photo, setPhoto] = useState(null);
  const [aadhaar, setAadhaar] = useState(null);
  const [pan, setPan] = useState(null);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const renderPreview = (file) => {
    if (!file) return null;
    return (
      <div className="my-2">
        <h3 className="text-white font-medium">{file.name}</h3>
        {file.type.startsWith('image/') ? (
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-32 h-32 object-cover"
          />
        ) : (
          <p className="text-gray-300">File uploaded: {file.name}</p>
        )}
      </div>
    );
  };

  return (
    <div className="m-10">
      <div className="flex justify-center p-2 rounded-t-2xl bg-slate-600">
        <h1 className="text-2xl font-bold text-white">User Documents</h1>
      </div>
      <div className="flex justify-center items-center border-2 border-gray-300 p-4 rounded-b-2xl">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-slate-500 text-white">
              <th className="px-4 py-2">Document</th>
              <th className="px-4 py-2">Upload</th>
              <th className="px-4 py-2">Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border text-center px-4 py-2 text-white">Photo</td>
              <td className="border flex items-center px-4 py-2">
                <input
                  required
                  type="file"
                  id="photo"
                  accept="image/*"
                  className="border-2 text-white  font-medium border-gray-300 rounded-md w-full p-2     er   focus-visible: outline-slate-400"
                  onChange={(e) => handleFileChange(e, setPhoto)}
                />
              </td>
              <td className="border px-4 py-2 ">{renderPreview(photo)}</td>
            </tr>
            <tr>
              <td className="border text-center px-4 py-2 text-white">Aadhaar</td>
              <td className="border px-4 py-2">
                <input
                  required
                  type="file"
                  id="aadhaar"
                  className="border-2 text-white font-medium border-gray-300 rounded-md w-full  focus-visible: outline-slate-400"
                  onChange={(e) => handleFileChange(e, setAadhaar)}
                />
              </td>
              <td className="border px-4 py-2">{renderPreview(aadhaar)}</td>
            </tr>
            <tr>
              <td className="border text-center px-4 py-2 text-white">PAN</td>
              <td className="border px-4 py-2">
                <input
                  required
                  type="file"
                  id="pan"
                  className="border-2 text-white  font-medium border-gray-300 rounded-md w-full  focus-visible: outline-slate-400"
                  onChange={(e) => handleFileChange(e, setPan)}
                />
              </td>
              <td className="border px-4 py-2">{renderPreview(pan)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
