import { useState } from "react";

import { CheckListInput } from '../CheckList/components/CheckListInput';

interface ITagsProps {
    setValue: (value: string) => void;
    tags: [];
};

export const Tags = ({ setValue }: ITagsProps) => {

    const [tagValue, setTagValue] = useState('');

    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) {

    }
    s


    return (
        <CheckListInput
            value={tagValue}
            onChange={(e) => handleTagChange(e.target.value)}
        />
    );
};