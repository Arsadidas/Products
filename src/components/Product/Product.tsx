import React from 'react';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import {styled, TableRow} from "@mui/material";
import {IProduct} from "../../redux/types/types";
import moment from "moment";
import styles from './Product.module.css'

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        cursor: "pointer"
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


interface IProps {
    item: IProduct
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedItem: (item: IProduct) => void
}


const Product: React.FC<IProps> = ({item, setActive, setSelectedItem}) => {

    const handleOpenModal = (item: IProduct) => {
        setSelectedItem(item)
        setActive(true)
    }

    return (
        <StyledTableRow onClick={() => handleOpenModal(item)} key={item.id}>
            <StyledTableCell component="th" scope="row">
                <div className={styles.productMainBlock}>
                    <span className={styles.productImg}>
                   <img src={item.imageUrl} alt=""/>
               </span>
                    <div className={styles.productName}>
                        {item.name?.substr(0, 15)}...
                    </div>
                </div>
            </StyledTableCell>
            <StyledTableCell
                align="center">{moment(new Date(item.createdAt!)).format('MM/DD/YY')}</StyledTableCell>
            <StyledTableCell align="center">₽{item.price}</StyledTableCell>
            <StyledTableCell align="center">{item.count}</StyledTableCell>
            <StyledTableCell align="center">{item.count ? <div className={styles.check}>В наличии</div> :
                <div className={styles.no}>Отсутствует</div>}</StyledTableCell>
        </StyledTableRow>
    );
};

export default Product;