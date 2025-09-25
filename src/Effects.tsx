import React, { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [lastMsg, setLastMsg] = useState<number>(-1);

    useEffect(() => {
        setLastMsg(-1);

        const handler = (value: number) => {
            setLastMsg(value);
        };

        subscribe(props.sourceId, handler);

        return () => {
            unsubscribe(props.sourceId, handler);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {lastMsg}
        </div>
    );
}
