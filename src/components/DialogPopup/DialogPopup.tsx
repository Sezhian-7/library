import React, { useEffect, useRef } from 'react';

import { ReactComponent as PopupClose } from '../../assets/svg/Closebutton.svg';
import "../styles/DialogPopup.css";


interface DialogPopupProps {
    PopupSize?: 'sm' | 'md' | 'lg';
    showIcon?: boolean;
    open?: any;
    children?: any;
    closeOnOutsideClick: any;
    onRequestClose: any;

}

export const DialogPopup: React.FC<DialogPopupProps> = (
    {
        PopupSize,
        showIcon,
        open,
        children,
        onRequestClose
    }) => {
    const dialogRef = useRef<any>(null);
    const lastActiveElement = useRef<any>(null);

    useEffect(() => {
        const dialogNode = dialogRef.current;
        if (open) {
            lastActiveElement.current = document.activeElement;
            dialogNode.showModal();
            // Find all focusable children
            const focusableElementsString =
                'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

            let focusableElements = dialogNode.querySelectorAll(
                focusableElementsString
            );
            focusableElements = Array.prototype.slice.call(focusableElements);
            const firstTabStop = focusableElements[0];
            const lastTabStop = focusableElements[focusableElements.length - 1];
        } else {
            dialogNode.close();
            if (
                lastActiveElement &&
                lastActiveElement.current &&
                lastActiveElement.current !== null
            ) {
                lastActiveElement.current.focus();
            }
        }
        // }
    }, [open]);


    return (
        <dialog ref={dialogRef} >
            <div className='popup-wrapper'>
                <div className={`popup-card ${PopupSize}`}>
                    {showIcon && (
                        <div className='popup-card-close'>
                            <button
                                className={`cursor-pointer}`}
                                type='button'
                                onClick={() => {
                                    onRequestClose()
                                }
                                }
                            >
                                <PopupClose />
                                <span className='sr-only'>popup</span>
                            </button>
                        </div>
                    )}
                    <div className='popup-card-content'>
                        {open && <div className='popup-body'>{children}</div>}
                    </div>
                </div>
            </div>
        </dialog>
    );
}