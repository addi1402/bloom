import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Quill({ prodDescription, setProdDescription }) {
  return (
    <ReactQuill
      className="quill-custom"
      theme="snow"
      size="sm"
      placeholder="Enter Product Description"
      value={prodDescription}
      onChange={setProdDescription}
      focusBorderColor="black"
    />
  );
}
