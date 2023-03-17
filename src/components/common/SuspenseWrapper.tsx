import React, {FC, PropsWithChildren, Suspense} from 'react';
import Preloader from './Preloader/Preloader';


export const SuspenseWrapper: FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <div>
        <Suspense fallback={<Preloader/>}>
            {children}
        </Suspense>
    </div>
    );
};

