import { useState } from "react";

import { Input } from '../Input';

interface ITagsProps {
    setValue: (value: string) => void;
    value?: string
};

export const Tags = ({ setValue, value }: ITagsProps) => {

    const [tagValue, setTagValue] = useState(value ?? '');

    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const value = e.target.value;
       setTagValue(value);
       setValue(tagValue);   
    };
    
    return (
        <Input
        
            value={tagValue}
            onChange={handleTagChange}
            label="Add Tags"
            placeholder='enter tags'
        />
    );
};