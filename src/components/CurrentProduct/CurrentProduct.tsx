import React from 'react';
import {IProduct} from "../../redux/types/types";
import styles from './CurrentProduct.module.css'

interface IProps {
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    selectedItem: IProduct | null
}

const CurrentProduct: React.FC<IProps> = ({setActive, selectedItem}) => {

    return (
        <div className={styles.currMain}>
            <div className={styles.modalCloseIcon} onClick={() => setActive(false)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 18L12 10L20 2L18 0L10 8L2 0L0 2L8 10L0 18L2 20L10 12L18 20L20 18Z" fill="black"/>
                </svg>
            </div>
            <div className={styles.currentTitle}>{selectedItem?.name}</div>
            <div className={styles.currentImage}><img src={selectedItem?.imageUrl} alt="ars"/></div>
            <div className={styles.currentPrice}>₽{selectedItem?.price}</div>
            <div className={styles.currentDesc}>{selectedItem?.description}</div>
            <div className={styles.currentCount}>Количество: {selectedItem?.count}</div>
            <div className={styles.currentRef}><a target='_blank' href={selectedItem?.url}>Ссылка на товар</a></div>
        </div>
    );
};

export default CurrentProduct;