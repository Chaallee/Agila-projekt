import { useRef, useState } from "react";

const [imageBase64, setImageBase64] = useState("");

const imageInputRef = useRef<HTMLInputElement>(null);

const HandleImageChange = () => {
    const file = imageInputRef.current?.files?.[0];

    if (!file)
        return;

    const reader = new FileReader();

    reader.onloadend = () => {
        setImageBase64(reader.result as string);
    };

    reader.readAsDataURL(file);
}

export default HandleImageChange;