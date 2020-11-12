import React from 'react';
import {TrashOutline} from '@graywolfai/react-heroicons';

export default function ContextMenu(props) {
    return (
        <div className="contextual-dropdown">
            <div className="menu menuDelete" onClick={() => props.removeFn(props.index)}>
                <TrashOutline />
                <span>Delete Tweet</span>
            </div>
        </div>
    )
}