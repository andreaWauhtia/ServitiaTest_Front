import { DropdownSearch } from '@/modules/shared/components/DropdownSearch';
import React, { useState } from 'react';

export interface RecipientSelectorProps{
    selectedRecipient?: string;
    selectRecipient: (recipient: string) => void;
}
export const RecipientSelector: React.FC<RecipientSelectorProps> = ({selectRecipient, selectedRecipient}) => {

    const recipients = [
        {id: 'pipou@gmail.com',label: 'Didier super'},
    ];
      return   (
            <div className='w-10/12 flex flex-row justify-center items-center py-6'>
            <input readOnly className='w-11/12 border-4 rounded-l-md' type='text' placeholder='Select recipient' value={recipients.find(it => (it.id === selectedRecipient??''))?.label ?? ''} />
            <span className='w-auto rounded-r-md'>
                <DropdownSearch key="RecipientSelector" items={recipients} selectItem={selectRecipient} selectedItems={recipients.find(it => (it.id === selectedRecipient??''))}  />
            </span>
            </div>
    );
};

