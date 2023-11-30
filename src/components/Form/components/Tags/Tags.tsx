import { useState } from "react";

import { Input } from '../Input';

interface ITagsProps {
    setValue: (value: string) => void;
};

export const Tags = ({ setValue }: ITagsProps) => {

    const [tagValue, setTagValue] = useState('');

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