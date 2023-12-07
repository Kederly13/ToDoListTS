import { useState } from 'react';

import { Input } from '../Input';

interface ITagsProps {
    setValue: (value: string) => void;
    value?: string
};

export const Tags: React.FC<ITagsProps> = ({ setValue, value }) => {

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