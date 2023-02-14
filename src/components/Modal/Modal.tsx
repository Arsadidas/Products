import React, {ReactNode} from 'react';
import styles from './Modal.module.css'

interface IProps {
    children?: ReactNode
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<IProps> = ({children, active, setActive}) => {

    return (
        <div className={active ? styles.modalActive : styles.modal}>
            <div
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;