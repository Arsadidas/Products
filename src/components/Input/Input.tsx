import React, {ChangeEvent} from 'react';
import styles from './Input.module.css'

interface IProps {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<IProps> = ({setValue, value}) => {

    return (
        <div className={styles.inp}>
            <input
                type="text"
                value={value}
                placeholder={'Фильтр по названию товара'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
            <div className={styles.loop}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 14L11.0094 11.004L14 14ZM12.6667 7.00001C12.6667 8.5029 12.0697 9.94424 11.007 11.0069C9.94427 12.0697 8.50293 12.6667 7.00004 12.6667C5.49715 12.6667 4.05581 12.0697 2.9931 11.0069C1.9304 9.94424 1.33337 8.5029 1.33337 7.00001C1.33337 5.49712 1.9304 4.05578 2.9931 2.99307C4.05581 1.93037 5.49715 1.33334 7.00004 1.33334C8.50293 1.33334 9.94427 1.93037 11.007 2.99307C12.0697 4.05578 12.6667 5.49712 12.6667 7.00001V7.00001Z"
                        stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default Input;