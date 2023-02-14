import React from 'react';
import {IProduct} from "../../redux/types/types";
import Product from "../Product/Product";
import {Paper, styled, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import moment from "moment";


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        color: theme.palette.common.black,
        fontFamily: 'Montserrat',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontFamily: 'Montserrat',
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
    filteredArray: IProduct[]
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedItem: (item: IProduct) => void
}

const Products: React.FC<IProps> = ({setActive, setSelectedItem, filteredArray}) => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 500, margin: '0 auto'}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Имя товара</StyledTableCell>
                            <StyledTableCell align="center">Дата создания</StyledTableCell>
                            <StyledTableCell align="center">Цена</StyledTableCell>
                            <StyledTableCell align="center">Количество</StyledTableCell>
                            <StyledTableCell align="center">Наличие</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {!(filteredArray.length === 0) && filteredArray.map((row: IProduct) => {
                            return <Product
                                key={row.id}
                                item={row}
                                setActive={setActive}
                                setSelectedItem={setSelectedItem}/>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {filteredArray.length === 0 &&
                <div style={{textAlign: "center", marginTop: "15px"}}>Товары не найдены. Измените запрос.</div>}
        </>
    );
};

export default Products;